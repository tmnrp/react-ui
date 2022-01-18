import { ICON_TYPES, ReactMaterialIcons } from "@tmnrp/react-material-icons";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { CONST_THEME_MODES } from "../utils/contants";

//
export const ThemeSwitcher = () => {
  const { themeMode, toggleThemeMode } = useContext(GlobalContext);

  //
  return (
    <div
      className="flex items-center px-1 cursor-pointer text-default-hover"
      onClick={toggleThemeMode}
    >
      <ReactMaterialIcons
        iconName={`${
          themeMode === CONST_THEME_MODES.LIGHT
            ? "brightness_4"
            : "brightness_7"
        } `}
        iconType={ICON_TYPES.filled}
      />
    </div>
  );
};
