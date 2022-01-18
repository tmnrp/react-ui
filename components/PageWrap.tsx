import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Breadcrumbs } from "@tmnrp/react-breadcrumbs";

//
export const PageWrap = ({
  children,
  actions,
  className = "",
  headerProps = {},
  ...props
}: IPageWrap) => {
  //
  return (
    <section className={`pagewrap ${className}`} {...props}>
      <PageHeader {...headerProps} actions={actions} />

      <article className="p-2 overflow-auto h-[calc(100vh-130px)]">
        {children}
      </article>
    </section>
  );
};

//
interface IPageWrap
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  headerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

//
PageWrap.getScrollHeight = () => {
  return (
    document.getElementsByTagName("header")[0].offsetHeight +
    document.getElementsByTagName("footer")[0].offsetHeight +
    // @ts-ignore
    document.getElementsByClassName("pagewrap-header")?.[0]?.offsetHeight
  );
};

//
const PageHeader = ({ className, actions, ...props }: IPageHeader) => {
  const { breadcrumbRef } = useContext(GlobalContext);

  //
  return (
    <div
      className={`flex items-center justify-between py-1 pl-4 pr-2 border-b pagewrap-header dark:border-gray-700 ${className}`}
      {...props}
    >
      <Breadcrumbs
        ref={breadcrumbRef}
        crumbs={[]}
        seperator="/"
        labelProps={{}}
      />
      {actions}
    </div>
  );
};

//
interface IPageHeader
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  actions?: React.ReactNode;
}
