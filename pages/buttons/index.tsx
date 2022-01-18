import { useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";

const Buttons = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return <PageWrap className="px-2">Welcome</PageWrap>;
};

export default Buttons;

//
const crumbs = [
  {
    icon: "",
    text: "Buttons",
  },
  {
    icon: "",
    text: "Example 1",
  },
];
