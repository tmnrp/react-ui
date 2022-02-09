import React, { useCallback, useEffect, useRef, useState } from "react";
import { CONST_CONFIG, CONST_THEME_MODES } from "../utils/contants";
import { IBreadcrumbsMethods } from "@tmnrp/react-breadcrumbs";
import { IProgressbarMethods } from "@tmnrp/react-progressbar";
import { useSidebar } from "@tmnrp/react-sidebar";

//
export interface GlobalContextProps {
  pbRef?: React.RefObject<IProgressbarMethods>;
  breadcrumbRef?: React.RefObject<IBreadcrumbsMethods>;
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
  toggleThemeMode: () => void;
  isExpanded: boolean;
  toggle: () => void;
}

//
export const GlobalContext = React.createContext<GlobalContextProps>({
  themeMode: CONST_CONFIG.THEME,
  setThemeMode: () => {},
  toggleThemeMode: () => {},
  isExpanded: false,
  toggle: () => {},
});

//
export interface Props {
  children: React.ReactNode;
}
export const GlobalContextProvider = ({ children }: Props) => {
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
  const pbRef = useRef<IProgressbarMethods>(null);

  //
  const { isExpanded, toggle } = useSidebar({ defaultIsExpanded: true });

  //
  return (
    <GlobalContext.Provider
      value={{
        //
        pbRef,
        breadcrumbRef,

        //
        themeMode,
        setThemeMode,
        toggleThemeMode,

        //
        isExpanded,
        toggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
