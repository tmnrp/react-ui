import {
  ICrumb,
  Breadcrumbs as BC,
  useBreadcrumbs,
} from "@tmnrp/react-breadcrumbs";
import { ReactMaterialIcons } from "@tmnrp/react-material-icons";
import { NextRouter, useRouter } from "next/router";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CONST_PAGES } from "../../utils/contants";

//
const Breadcrumbs = () => {
  const router = useRouter();
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return (
    <PageWrap className="px-2">
      <div className="w-full space-y-4">
        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Only labels :</div>
          <BC
            crumbs={crumbs1}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Only icons :</div>
          <BC
            crumbs={crumbs2}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Both icons and labels :</div>
          <BC
            crumbs={crumbs3}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Mix and match :</div>
          <BC
            crumbs={crumbs4}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Clickable navigation links :</div>
          <BC
            crumbs={getCrumbs5(router)}
            className="flex flex-wrap"
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

const getCrumbs5 = (router: NextRouter): Array<ICrumb> => {
  return [
    {
      icon: <ReactMaterialIcons iconName="home" />,
      label: "Home",
      className: "hover:text-red-400 cursor-pointer",
      onClick: () => router.push(CONST_PAGES.LANDING.PATH),
    },
    {
      icon: <ReactMaterialIcons iconName="double_arrow" />,
      label: "Breadcrumbs",
      className: "hover:text-emerald-400 cursor-pointer",
      onClick: () => router.push(CONST_PAGES.LANDING.PATH),
    },
    {
      icon: <ReactMaterialIcons iconName="view_list" />,
      label: "Example",
      className: "hover:text-blue-400 cursor-pointer",
      onClick: () => router.push(CONST_PAGES.LANDING.PATH),
    },
  ];
};
