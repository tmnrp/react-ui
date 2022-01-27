import { ICrumb, useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { useContext } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { Progressbar as PB } from "@tmnrp/react-progressbar";

//
const Progressbar = () => {
  const { breadcrumbRef, pbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  return (
    <PageWrap className="px-2">
      <PB className="bg-emerald-600 h-1" ref={pbRef} />
      <button
        onClick={() => {
          pbRef?.current?.activate();
        }}
      >
        Activate
      </button>

      <button
        onClick={() => {
          pbRef?.current?.kill();
        }}
      >
        Kill
      </button>
    </PageWrap>
  );
};
export default Progressbar;

//
const crumbs: Array<ICrumb> = [
  {
    icon: <GoogleMaterialIcons iconName="home" />,
    label: "Home",
  },
  {
    icon: <GoogleMaterialIcons iconName="double_arrow" />,
    label: "Progressbar",
  },
  {
    icon: <GoogleMaterialIcons iconName="view_list" />,
    label: "Examples",
  },
];
