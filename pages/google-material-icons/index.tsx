import { ICrumb, useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";

//
const GoogleMIcons = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return (
    <PageWrap className="px-2">
      <div className="w-full space-y-4">
        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Filled :</div>
          <GoogleMaterialIcons iconName="home" />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Outlined :</div>
          <GoogleMaterialIcons iconName="home" type="outlined" />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Rounded :</div>
          <GoogleMaterialIcons iconName="home" type="round" />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Sharp :</div>
          <GoogleMaterialIcons iconName="home" type="sharp" />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Two tone :</div>
          <GoogleMaterialIcons iconName="home" type="two-tone" />
        </div>
      </div>
    </PageWrap>
  );
};
export default GoogleMIcons;

const crumbs: Array<ICrumb> = [
  {
    icon: <GoogleMaterialIcons iconName="home" />,
    label: "Home",
  },
  {
    icon: <GoogleMaterialIcons iconName="double_arrow" />,
    label: "Google material icons",
  },
  {
    icon: <GoogleMaterialIcons iconName="view_list" />,
    label: "Examples",
  },
];
