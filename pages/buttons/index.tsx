import { ICrumb, useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Breadcrumbs } from "@tmnrp/react-breadcrumbs";

const Buttons = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return (
    <PageWrap className="px-2">
      <div className="flex justify-between pb-2 border-b dark:border-b-gray-800">
        <div>Only labels :</div>
        <Breadcrumbs
          crumbs={crumbs1}
          crumbsProps={{ className: "flex space-x-1 pr-2" }}
        />
      </div>
    </PageWrap>
  );
};

export default Buttons;

//
const crumbs = [
  {
    label: "Buttons",
  },
  {
    label: "Example 1",
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
