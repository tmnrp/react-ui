import {
  ICrumb,
  Breadcrumbs as BC,
  useBreadcrumbs,
} from "@tmnrp/react-breadcrumbs";
import { ReactMaterialIcons } from "@tmnrp/react-material-icons";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";

//
const Breadcrumbs = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return (
    <PageWrap className="px-2">
      <div className="w-full space-y-4">
        <div className="flex justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Only labels :</div>
          <BC
            crumbs={crumbs1}
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Only icons :</div>
          <BC
            crumbs={crumbs2}
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Both icons and labels :</div>
          <BC
            crumbs={crumbs3}
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Mix and match :</div>
          <BC
            crumbs={crumbs4}
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>
      </div>
    </PageWrap>
  );
};
export default Breadcrumbs;

const crumbs: Array<ICrumb> = [
  {
    icon: <ReactMaterialIcons iconName="home" />,
    label: "Home",
  },
  {
    icon: <ReactMaterialIcons iconName="double_arrow" />,
    label: "Breadcrumbs",
  },
  {
    icon: <ReactMaterialIcons iconName="view_list" />,
    label: "Example",
  },
];

//
const crumbs1: Array<ICrumb> = [
  {
    label: "Home",
  },
  {
    label: "Breadcrumbs",
  },
  {
    label: "Example 1",
  },
];

const crumbs2: Array<ICrumb> = [
  {
    icon: <ReactMaterialIcons iconName="home" />,
  },
  {
    icon: <ReactMaterialIcons iconName="face" />,
  },
  {
    icon: <ReactMaterialIcons iconName="add" />,
  },
];

const crumbs3: Array<ICrumb> = [
  {
    icon: <ReactMaterialIcons iconName="home" />,
    label: "Home",
  },
  {
    icon: <ReactMaterialIcons iconName="double_arrow" />,
    label: "Breadcrumbs",
  },
  {
    icon: <ReactMaterialIcons iconName="view_list" />,
    label: "Example",
  },
];

const crumbs4: Array<ICrumb> = [
  {
    icon: <ReactMaterialIcons iconName="home" />,
  },
  {
    icon: <ReactMaterialIcons iconName="double_arrow" />,
  },
  {
    icon: "",
    label: "Example",
  },
];
