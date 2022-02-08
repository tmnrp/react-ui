import React from "react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

//
export const Sidebar = ({
  children,
  className = "",
  style = {},
  isExpanded,
  isExpandedWidth = 200,
  isExpandedTransitionduration = 0.5,
  ...props
}: ISidebar) => {
  return (
    <aside
      className={`overflow-hidden ${className}`}
      style={{
        transition: `width ${isExpandedTransitionduration}s ease-in-out`,
        width: isExpanded ? isExpandedWidth : 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </aside>
  );
};
export interface ISidebar
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  isExpanded: boolean;
  isExpandedWidth?: string | number | undefined;
  isExpandedTransitionduration?: number;
}

//
export const SidebarToggler = ({
  className = "",
  isExpanded,
  toggle,
  isExpandedIcon,
  isCollapsedIcon,
  ...props
}: ISidebarToggler) => {
  return (
    <aside
      className={`cursor-pointer inline-flex justify-center items-center ${className}`}
      onClick={toggle}
      {...props}
    >
      {isExpanded ? isExpandedIcon : isCollapsedIcon}
    </aside>
  );
};
export interface ISidebarToggler
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isExpanded: boolean;
  toggle: () => void;
  isExpandedIcon: React.ReactNode;
  isCollapsedIcon: React.ReactNode;
}

//
export const useSidebar = (props?: { defaultIsExpanded?: boolean }) => {
  //
  const [isExpanded, setIsExpanded] = useState(
    props?.defaultIsExpanded || false
  );

  //
  const toggle = () => setIsExpanded((isExpanded) => !isExpanded);

  //
  return { isExpanded, setIsExpanded, toggle };
};
