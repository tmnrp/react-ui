import React, { DetailedHTMLProps, HTMLAttributes } from "react";

//
export const Explorer = ({
  items = [],
  style = {},
  afterOnClick,
  ...props
}: IExplorer) => {
  //
  return (
    <ul
      style={{
        paddingBottom: "0.5rem",
        ...style,
      }}
      {...props}
    >
      {items.map((item, i) => {
        const itemOG: IExplorerItem = { ...item };
        const {
          icon,
          label,
          items: itemPropsItems,
          style = {},
          itemProps = {},
          clickable = true,
          ...rest
        } = item;
        const { style: itemPropsStyle, onClick, ...itemPropsRest } = itemProps;

        //
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
              onClick={(e) => {
                if (clickable) {
                  onClick?.(e);
                  afterOnClick?.({
                    e,
                    props: itemOG,
                  });
                }
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

            {itemPropsItems && (
              <Explorer
                afterOnClick={afterOnClick}
                style={style}
                items={itemPropsItems}
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
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  afterOnClick?: ({
    e,
    props,
  }: {
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>;
    props: IExplorerItem;
  }) => void;
  items: Array<IExplorerItem>;
}

//
export interface IExplorerItem extends React.HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  itemProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  clickable?: boolean;
  items?: Array<IExplorerItem>;
}
