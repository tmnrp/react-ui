import { useBreadcrumbs, ICrumb } from "@tmnrp/react-breadcrumbs";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getExplorerContent } from "../_app";
import { Explorer } from "@tmnrp/react-explorer";

const ExplorerPage = () => {
  const router = useRouter();
  const { breadcrumbRef, pbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return (
    <PageWrap className="px-2">
      <Explorer items={getExplorerContent({ router })} />
    </PageWrap>
  );
};
export default ExplorerPage;

//
const crumbs: Array<ICrumb> = [
  {
    icon: <GoogleMaterialIcons iconName="home" />,
    label: "Home",
  },
  {
    icon: <GoogleMaterialIcons iconName="double_arrow" />,
    label: "Explorer",
  },
  {
    icon: <GoogleMaterialIcons iconName="view_list" />,
    label: "Examples",
  },
];
