import { ReactMaterialIcons } from "@tmnrp/react-material-icons";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { sidebarContents } from "../../pages/_app";

//
export const Aside = ({ className }: { className?: string }) => {
  //

  //
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  //
  return (
    <aside className={`${isExpanded ? "expanded" : ""} ${className} `}>
      <SidebarExpander
        iconName={isExpanded ? "menu_open" : "menu"}
        title="Menu"
        setIsExpanded={setIsExpanded}
      />
      <section className="flex flex-col space-y-2 overflow-x-hidden">
        {sidebarContents.map((menu, mi) => (
          <SidebarMenu
            key={mi}
            iconName={menu.iconName}
            title={menu.title}
            items={menu.items}
          />
        ))}
      </section>
    </aside>
  );
};

//
const SidebarExpander = ({
  iconName,
  title,
  setIsExpanded,
}: ISidebarExpander) => {
  return (
    <li
      className={`
        sidebar__expander h-10
        pl-2 flex items-center space-x-3.5 text-lg font-bold tracking-widest uppercase cursor-pointer
        border-b dark:border-secondary-dark
      `}
      onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
    >
      <ReactMaterialIcons className="text-2xl" iconName={iconName} />
      <p>{title}</p>
    </li>
  );
};

//
const SidebarMenuHeader = ({ iconName, title }: ISidebarMenuHeader) => {
  return (
    <li
      className={`
        sidebar__menu-header pl-1 dark:text-secondary
        flex items-center space-x-2 text-base font-semibold tracking-widest uppercase
      `}
    >
      <ReactMaterialIcons className="text-2xl" iconName={iconName} />
      <p>{title}</p>
    </li>
  );
};

//
const SidebarMenu = ({ iconName, title, items }: ISidebarMenu) => (
  <ul className="px-1">
    <SidebarMenuHeader iconName={iconName} title={title} />
    {items.map((menuitem) => {
      return (
        <SidebarMenuItem
          key={menuitem.itemKey}
          itemKey={menuitem.itemKey}
          iconName={menuitem.iconName}
          title={menuitem.title}
          pathname={menuitem.pathname}
        />
      );
    })}
  </ul>
);

//
const SidebarMenuItem = ({
  iconName,
  title,
  pathname,
  itemKey,
}: ISidebarMenuItem) => {
  const router = useRouter();
  const isSelected = router.pathname.split("/")[3] === itemKey;

  //
  return (
    <li
      className={`
        sidebar__menu-item
        pl-1 flex items-center space-x-2 uppercase cursor-pointer rounded-sm
        ${
          isSelected
            ? `
              bg-primary text-secondary
              bg-opacity-100
            `
            : "hover:bg-primary hover:bg-opacity-50 dark:hover:bg-opacity-30"
        }
      `}
      onClick={() => router.push(pathname)}
    >
      <ReactMaterialIcons className={`text-2xl`} iconName={iconName} />
      <p>{title}</p>
    </li>
  );
};

//
interface ISidebarExpander {
  iconName: string;
  title: string;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

//
interface ISidebarMenuHeader {
  iconName: string;
  title: string;
}

//
interface ISidebarMenuItem {
  iconName: string;
  title: string;
  pathname: string;
  itemKey: string;
}

//
export interface ISidebarMenu {
  iconName: string;
  title: string;
  items: Array<ISidebarMenuItem>;
}
