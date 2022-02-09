import React from "react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

//
export const Sidebar = ({
  children,
  style = {},
  isExpanded,
  isExpandedWidth = 200,
  isExpandedTransitionduration = 0.5,
  ...props
}: ISidebar) => {
  return (
    <aside
      style={{
        overflow: "hidden",
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
  style = {},
  isExpanded,
  toggle,
  isExpandedIcon,
  isCollapsedIcon,
  ...props
}: ISidebarToggler) => {
  return (
    <aside
      style={{
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
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
