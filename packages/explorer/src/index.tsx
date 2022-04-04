import React from "react";

//
export const Explorer = ({ items = [], wrapperHOC, ...props }: IExplorer) => {
  //
  return (
    <ul {...props}>
      {items.map(({ icon, label, url, ...itemRest }, index) => {
        const item = (
          <a {...itemRest.props} {...(url && { href: url })}>
            {icon && (
              <div style={{ display: "flex", alignItems: "center" }}>
                {icon}
              </div>
            )}
            {label && (
              <div style={{ display: "flex", alignItems: "center" }}>
                {label}
              </div>
            )}
          </a>
        );

        return (
          <li key={index}>
            {wrapperHOC
              ? wrapperHOC({ cmp: item, icon, label, url, ...itemRest })
              : item}

            {itemRest.items && (
              <Explorer
                items={itemRest.items}
                wrapperHOC={wrapperHOC}
                {...props}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

//
export interface IExplorer
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items?: Array<IExplorerItem>;
  wrapperHOC?: ({}: IWrapperHOC) => any;
}

//
export interface IExplorerItem {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  props?: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  items?: Array<IExplorerItem>;
  url?: string;
}

//
export interface IWrapperHOC extends IExplorerItem {
  cmp: React.ReactNode;
}
