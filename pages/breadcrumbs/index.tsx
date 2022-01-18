import { ICrumb, useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";

const Breadcrumbs = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return <PageWrap className="px-2">Welcome</PageWrap>;
};

export default Breadcrumbs;

const crumbs: Array<ICrumb> = [
  {
    icon: "",
    text: "Home",
    disableSeparator: true,
  },
  {
    icon: "",
    text: "Breadcrumbs",
  },
  {
    icon: "",
    text: "Example 1",
  },
];
