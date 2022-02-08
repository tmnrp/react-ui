/* eslint-disable react/display-name */
import { ICrumb, useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useSidebar, SidebarToggler, Sidebar } from "@tmnrp/react-sidebar";

//
const SidebarPage = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  const { isExpanded, toggle } = useSidebar();

  //
  return (
    <PageWrap className="px-2">
      <div className="pb-2 border-b dark:border-b-gray-800">
        <div>
          <SidebarToggler
            isExpanded={isExpanded}
            toggle={toggle}
            isExpandedIcon={<GoogleMaterialIcons iconName="menu_open" />}
            isCollapsedIcon={<GoogleMaterialIcons iconName="menu" />}
          />
        </div>
        <div>
          <Sidebar
            className="whitespace-nowrap"
            isExpanded={isExpanded}
            isExpandedWidth={`100%`}
          >
            <div>This is side bar</div>
            <div>lorem20</div>
          </Sidebar>
        </div>
      </div>
    </PageWrap>
  );
};
export default SidebarPage;

//
const crumbs: Array<ICrumb> = [
  {
    icon: <GoogleMaterialIcons iconName="home" />,
    label: "Home",
  },
  {
    icon: <GoogleMaterialIcons iconName="view_sidebar" />,
    label: "Sidebar",
  },
  {
    icon: <GoogleMaterialIcons iconName="view_list" />,
    label: "Examples",
  },
];
