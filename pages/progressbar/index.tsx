import { ICrumb, useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { useContext, useEffect, useRef } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import {
  Progressbar as PB,
  IProgressbarMethods,
} from "@tmnrp/react-progressbar";

//
const Progressbar = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  const pbRef = useRef<IProgressbarMethods>(null);
  useEffect(() => {
    pbRef.current?.activate();

    //
    setTimeout(() => {
      pbRef.current?.kill();
    }, 3000);
  }, []);

  //
  return (
    <PageWrap className="px-2">
      <PB className="bg-red-400" ref={pbRef} frequency={100} height={10} />
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
