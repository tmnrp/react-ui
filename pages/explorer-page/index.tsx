import { DetailedHTMLProps, HTMLAttributes, LiHTMLAttributes } from "react";
import { PageWrap } from "../../components/PageWrap";
import { EXPLORER_CONTENT } from "../_app";

const ExplorerPage = () => {
  return (
    <PageWrap className="px-2">
      <Explorer items={EXPLORER_CONTENT} />
    </PageWrap>
  );
};
export default ExplorerPage;

//
export const Explorer = ({ items = [] }: IExplorer) => {
  return (
    <ul className="pb-2">
      {items.map(
        (
          { icon, label, items, className = "", onClick, itemKey, ...rest },
          i
        ) => (
          <li key={i} className={`pl-2 ${className}`} {...rest}>
            <div
              className={`flex space-x-2 ${
                onClick ? "hover:text-primary cursor-pointer" : ""
              }`}
              onClick={onClick}
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
  items?: Array<IExplorerItem>;
  itemKey?: string;
}
