import React, { DetailedHTMLProps, HTMLAttributes } from "react";

//
export const Explorer = ({ items = [] }: IExplorer) => {
  return (
    <ul className="pb-2">
      {items.map(
        (
          { icon, label, items, className = "", itemProps = {}, ...rest },
          i
        ) => (
          <li key={i} className={`pl-2 ${className}`} {...rest}>
            <div
              className={`flex space-x-2 whitespace-nowrap ${
                itemProps?.onClick ? "hover:text-primary cursor-pointer" : ""
              }`}
              {...itemProps}
            >
              {icon && <div className="flex items-center">{icon}</div>}
              {label && <div className="flex items-center">{label}</div>}
            </div>

            {items && <Explorer items={items} />}
          </li>
        )
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
