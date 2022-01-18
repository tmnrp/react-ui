/* eslint-disable react/display-name */
import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import { useImperativeHandle } from "react";

export const Breadcrumbs = forwardRef<IBreadcrumbsMethods, IBreadcrumbs>(
  ({ className = "", seperator = "/", style, crumbProps, ...props }, ref) => {
    const [crumbs, setCrumbs] = useState<Array<ICrumb>>(props.crumbs);
    useImperativeHandle(ref, () => ({
      setCrumbs: setCrumbs,
    }));

    //
    return (
      <div
        className={`tm-breadcrumbs ${className}`}
        style={{ display: "flex", ...style }}
        {...props}
      >
        {crumbs?.map(
          ({ className, disableSeparator, icon, text, ...props }, i) => {
            return (
              <div
                key={i}
                className={`crumb ${className || ""}`}
                {...crumbProps}
                {...props}
              >
                {disableSeparator !== true && seperator}
                {icon}
                {text}
              </div>
            );
          }
        )}
      </div>
    );
  }
);

//
export const useBreadcrumbs = ({
  ref,
  crumbs,
}: {
  ref: React.RefObject<IBreadcrumbsMethods> | undefined;
  crumbs: ICrumb[];
}) => {
  useEffect(() => {
    const currRef = ref?.current;
    currRef?.setCrumbs(crumbs);

    // cleanup : clear the breadcrumb
    return () => currRef?.setCrumbs([]);
  }, [ref, crumbs]);
};

//
export interface ICrumb
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  disableSeparator?: boolean;
  icon: React.ReactNode;
  text: React.ReactNode;
}

//
export interface IBreadcrumbs
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  crumbs: Array<ICrumb>;
  seperator?: React.ReactNode;
  crumbProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

//
export interface IBreadcrumbsMethods {
  setCrumbs: React.Dispatch<React.SetStateAction<ICrumb[]>>;
}
