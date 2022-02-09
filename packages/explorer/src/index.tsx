import React, { DetailedHTMLProps, HTMLAttributes } from "react";

//
export const Explorer = ({ items = [], style = {}, ...props }: IExplorer) => {
  return (
    <ul
      style={{
        paddingBottom: "0.5rem",
        ...style,
      }}
      {...props}
    >
      {items.map(
        ({ icon, label, items, style = {}, itemProps = {}, ...rest }, i) => {
          const { style: itemPropsStyle, ...itemPropsRest } = itemProps;
          return (
            <li
              key={i}
              style={{
                paddingLeft: "0.5rem",
                ...style,
              }}
              {...rest}
            >
              <div
                style={{
                  display: "flex",
                  whiteSpace: "nowrap",
                  ...itemPropsStyle,
                }}
                {...itemPropsRest}
              >
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
              </div>

              {items && <Explorer items={items} />}
            </li>
          );
        }
      )}
    </ul>
  );
};

//
export interface IExplorer
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items: Array<IExplorerItem>;
}

//
export interface IExplorerItem extends React.HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  itemProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  items?: Array<IExplorerItem>;
}
