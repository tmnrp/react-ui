import React, { useCallback, useEffect, useRef, useState } from "react";
import { CONST_CONFIG, CONST_THEME_MODES } from "../utils/contants";
import { IBreadcrumbsMethods } from "@tmnrp/react-breadcrumbs";

//
export interface GlobalContextProps {
  // progressbarLineRef?: React.RefObject<ReactProgressbarLineMethodProps>;
  breadcrumbRef?: React.RefObject<IBreadcrumbsMethods>;
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
  toggleThemeMode: () => void;
  breakpoint: "sm" | "md" | "lg" | "xl" | "2xl";
}

//
export const GlobalContext = React.createContext<GlobalContextProps>({
  themeMode: CONST_CONFIG.THEME,
  setThemeMode: () => {},
  toggleThemeMode: () => {},
  breakpoint: "sm",
});

//
export interface Props {
  children: React.ReactNode;
}
export const GlobalContextProvider = ({ children }: Props) => {
  // const progressbarLineRef = useRef<ReactProgressbarLineMethodProps>(null);
  const breadcrumbRef = useRef<IBreadcrumbsMethods>(null);
  const [themeMode, setThemeMode] = useState(CONST_CONFIG.THEME);
  useEffect(() => {
    const el = document.getElementById("__next");
    themeMode === CONST_THEME_MODES.DARK &&
      el?.classList.add(CONST_THEME_MODES.DARK);
    themeMode === CONST_THEME_MODES.LIGHT &&
      el?.classList.remove(CONST_THEME_MODES.DARK);
  }, [themeMode]);

  //
  const toggleThemeMode = useCallback(() => {
    setThemeMode((theme) =>
      theme === CONST_THEME_MODES.LIGHT
        ? CONST_THEME_MODES.DARK
        : CONST_THEME_MODES.LIGHT
    );
  }, []);

  //
  const [breakpoint, setBreakpoint] = useState<
    "sm" | "md" | "lg" | "xl" | "2xl"
  >("sm");
  const breakPointHandler = useCallback(
    (width) =>
      setBreakpoint(
        width < 768
          ? "sm"
          : width < 1024
          ? "md"
          : width < 1280
          ? "lg"
          : width < 1536
          ? "xl"
          : "2xl"
      ),
    []
  );
  useEffect(() => {
    breakPointHandler(window.innerWidth);
    window.addEventListener("resize", () =>
      breakPointHandler(window.innerWidth)
    );

    //
    return () => {
      window.removeEventListener("resize", () =>
        breakPointHandler(window.innerWidth)
      );
    };
  }, [breakPointHandler]);

  //
  return (
    <GlobalContext.Provider
      value={{
        // progressbarLineRef: progressbarLineRef,
        breadcrumbRef: breadcrumbRef,
        themeMode: themeMode,
        setThemeMode: setThemeMode,
        toggleThemeMode: toggleThemeMode,
        breakpoint: breakpoint,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
