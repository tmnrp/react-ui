import React from "react";

export const Explorer = ({}: IExplorer) => {
  return <div>Explorer</div>;
};

export interface IExplorer
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
