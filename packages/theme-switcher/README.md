# @tmnrp/react-theme-switcher

@tmnrp/react-theme-switcher is a lightweight latest treanding markup to display the theme-switcher.

# Features

- Configurable height, frequency and all html attributes with ease.

### Examples [link](https://tmnrp-react-ui.vercel.app/theme-switcher)

```sh
https://tmnrp-react-ui.vercel.app/theme-switcher
```

### Installation [link](https://www.npmjs.com/package/@tmnrp/react-theme-switcher)

```sh
$ npm i @tmnrp/react-theme-switcher
```

### Properties

@tmnrp/react-theme-switcher (IProgressbar) is currently extended with the following properties.

| Properties   | type                                | Description                                                                |
| ------------ | ----------------------------------- | -------------------------------------------------------------------------- |
| defaultTheme | string                              | Default theme value to start with.                                         |
| children     | (theme: string) => React.ReactNode; | Renderable children receives theme as parameter.                           |
| ...props     | HTML div props                      | Common HTML div properties that needs to be applied to the theme-switcher. |

IProgressbarMethods is currently extended with the following methods.

| Properties | type     | Description               |
| ---------- | -------- | ------------------------- |
| setTheme   | function | Set the state value theme |

### Implementation for single page breadcrumb

```
import { Progressbar, IProgressbarMethods } from "@tmnrp/react-theme-switcher";

const App = () => {
  const pbRef = useRef<IProgressbarMethods>(null);

  //
  return (
    <div className="flex items-center justify-center w-full h-full">
      <ThemeSwitcher ref={tsRef} defaultTheme="dark" className="cursor-pointer">
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
        </ThemeSwitcher>
    </div>
  );
};
```

### Todos

- Let me know :-)

## License

MIT Tony Martin
