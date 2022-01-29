/* eslint-disable react/display-name */
import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

//
export const ThemeSwitcher = forwardRef(
  (
    {
      className = "",
      children,
      defaultTheme = "",
      onThemeChange,
      ...props
    }: IThemeSwitcher,
    ref: Ref<IThemeSwitcherMethods>
  ) => {
    const [theme, setTheme] = useState<string>(defaultTheme);

    //
    useEffect(() => onThemeChange?.(theme), [theme, onThemeChange]);

    //
    useImperativeHandle(
      ref,
      () => ({
        setTheme: (theme) => setTheme(theme),
      }),
      []
    );

    //
    return (
      <div className={`tm-theme-switcher ${className}`} {...props}>
        {children(theme)}
      </div>
    );
  }
);

//
export interface IThemeSwitcher extends React.HTMLAttributes<HTMLElement> {
  defaultTheme?: string;
  children: (theme: string) => React.ReactNode;
  onThemeChange?: (theme: string) => void;
}

//
export interface IThemeSwitcherMethods {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
