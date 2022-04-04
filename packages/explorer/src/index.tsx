import React from "react";

//
export const Explorer = ({
  items = [],
  wrapperHOC,
  commonItemProps = {},
  ...props
}: IExplorer) => {
  //
  return (
    <ul {...props}>
      {items.map(({ icon, label, url, ...item }, index) => {
        const cmp = (
          <a {...commonItemProps} {...item.props} {...(url && { href: url })}>
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
              ? wrapperHOC({ cmp: cmp, icon, label, url, ...item })
              : cmp}

            {item.items && (
              <Explorer
                items={item.items}
                wrapperHOC={wrapperHOC}
                commonItemProps={commonItemProps}
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
  commonItemProps?: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
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
