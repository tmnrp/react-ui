import {
  ICrumb,
  useBreadcrumbs,
  Breadcrumbs as BC,
  IBreadcrumbsMethods,
} from "@tmnrp/react-breadcrumbs";
import { useContext, useRef } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";

//
const Breadcrumbs = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  //
  const sampleBCRef = useRef<IBreadcrumbsMethods>(null);

  //
  return (
    <PageWrap className="px-2" headerProps={{ className: "hidden" }}>
      <div className="flex items-center justify-center w-full h-full">
        <BC
          ref={sampleBCRef}
          crumbs={crumbs}
          crumbsProps={{ className: "flex space-x-1 pr-2" }}
          seperator="/"
          labelProps={{}}
        />
      </div>
    </PageWrap>
  );
};
export default Breadcrumbs;

const crumbs: Array<ICrumb> = [
  {
    icon: "",
    label: "Home",
  },
  {
    icon: "",
    label: "Breadcrumbs",
  },
  {
    icon: "",
    label: "Example 1",
  },
];
