import React from "react";

export const GoogleMaterialIcons = ({
  className = "",
  type,
  iconName,
  ...props
}: IGoogleMaterialIcons) => {
  const iconType = type ? `-${type}` : "";
  return (
    <span className={`material-icons${iconType} ${className}`} {...props}>
      {iconName}
    </span>
  );
};

//
export interface IGoogleMaterialIcons
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  type?: "outlined" | "round" | "sharp" | "two-tone";
  iconName: string;
}
