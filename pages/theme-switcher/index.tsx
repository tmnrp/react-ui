import { useBreadcrumbs } from "@tmnrp/react-breadcrumbs";
import { useContext, useRef } from "react";
import { PageWrap } from "../../components/PageWrap";
import { GlobalContext } from "../../contexts/GlobalContext";
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import {
  ThemeSwitcher as TS,
  IThemeSwitcherMethods,
} from "@tmnrp/react-theme-switcher";

const ThemeSwitcher = () => {
  const { breadcrumbRef } = useContext(GlobalContext);
  useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

  const tsRef = useRef<IThemeSwitcherMethods>(null);

  //
  return (
    <PageWrap className="px-2">
      <div className="pb-2 border-b dark:border-b-gray-800">
        <TS ref={tsRef} defaultTheme="dark" className="cursor-pointer">
          {(theme: string) => (
            <div className="flex w-full justify-between">
              <div className="flex">
                <p className="pr-2">Theme: </p>
                <p className="uppercase font-extrabold">{theme}</p>
              </div>

              <div
                onClick={() =>
                  tsRef.current?.setTheme(() => {
                    // custom theme logic
                    return theme === "dark" ? "light" : "dark";
                  })
                }
              >
                {theme === "dark" ? (
                  <GoogleMaterialIcons iconName="brightness_high" />
                ) : (
                  <GoogleMaterialIcons iconName="brightness_4" />
                )}
              </div>
            </div>
          )}
        </TS>
      </div>
    </PageWrap>
  );
};

export default ThemeSwitcher;

//
const crumbs = [
  {
    label: "Theme switcher",
  },
  {
    label: "Example 1",
  },
];
