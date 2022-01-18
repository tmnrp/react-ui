/* eslint-disable react/display-name */
import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import { useImperativeHandle } from "react";

export const Breadcrumbs = forwardRef<IBreadcrumbsMethods, IBreadcrumbs>(
  (
    {
      className = "",
      seperator = "/",
      style,
      crumbsProps,
      seperatorProps,
      iconProps,
      labelProps,
      ...props
    },
    ref
  ) => {
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
        {crumbs?.map(({ className, icon, label, ...props }, i) => {
          return (
            <div
              key={i}
              className={`crumb flex ${className || ""}`}
              {...crumbsProps}
              {...props}
            >
              <div {...seperatorProps}>{seperator}</div>
              <div {...iconProps}>{icon}</div>
              <div {...labelProps}>{label}</div>
            </div>
          );
        })}
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
  icon: React.ReactNode;
  label: React.ReactNode;
}

//
export interface IBreadcrumbs
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  seperator?: React.ReactNode;
  seperatorProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  crumbs: Array<ICrumb>;
  crumbsProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  iconProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  labelProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

//
export interface IBreadcrumbsMethods {
  setCrumbs: React.Dispatch<React.SetStateAction<ICrumb[]>>;
}
