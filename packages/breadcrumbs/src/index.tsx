/* eslint-disable react/display-name */
import React, { forwardRef, useEffect } from "react";
import { useState } from "react";
import { useImperativeHandle } from "react";

export const Breadcrumbs = forwardRef<IBreadcrumbsMethods, IBreadcrumbs>(
  (
    {
      className = "",
      style,
      seperator = "/",
      crumbsProps = {},
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
    const { className: crumbsPropsClassName, ...crumbsPropsRest } = crumbsProps;

    //
    return (
      <div
        className={`tm-breadcrumbs ${className}`}
        style={{ display: "flex", ...style }}
        {...props}
      >
        {crumbs?.map(
          ({ className = "", icon, label, style = {}, ...props }, i) => {
            return (
              <div
                key={i}
                className={`crumb ${crumbsPropsClassName} ${className}`}
                style={{
                  display: "flex",
                  ...style,
                }}
                {...crumbsPropsRest}
                {...props}
              >
                <Seperator {...seperatorProps}>{seperator}</Seperator>
                {icon && <Icon {...iconProps}>{icon}</Icon>}
                {label && <Label {...labelProps}>{label}</Label>}
              </div>
            );
          }
        )}
      </div>
    );
  }
);

//
interface ISeperator
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
const Seperator = ({ children, style = {}, ...props }: ISeperator) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

//
interface IIcon
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
const Icon = ({ children, style = {}, ...props }: IIcon) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
    {...props}
  >
    {children}
  </div>
);

//
interface ILabel
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
const Label = ({ children, style = {}, ...props }: ILabel) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
    {...props}
  >
    {children}
  </div>
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
  icon?: React.ReactNode;
  label?: React.ReactNode;
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
