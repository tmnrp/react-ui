import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Breadcrumbs } from "@tmnrp/react-breadcrumbs";

//
export const PageWrap = ({ children, actions, className = "" }: IPageWrap) => {
  const { breadcrumbRef } = useContext(GlobalContext);

  //
  return (
    <section className={`pagewrap ${className}`}>
      <div className="flex items-center justify-between py-1 pl-4 pr-2 border-b pagewrap-header dark:border-gray-700">
        <Breadcrumbs
          ref={breadcrumbRef}
          crumbs={[]}
          seperator="/"
          crumbProps={{ className: "pr-2" }}
        />
        {actions}
      </div>

      <article className="p-2 overflow-auto h-[calc(100vh-130px)]">
        {children}
      </article>
    </section>
  );
};

interface IPageWrap
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

PageWrap.getScrollHeight = () => {
  return (
    document.getElementsByTagName("header")[0].offsetHeight +
    document.getElementsByTagName("footer")[0].offsetHeight +
    // @ts-ignore
    document.getElementsByClassName("pagewrap-header")?.[0]?.offsetHeight
  );
};
