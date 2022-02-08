# @tmnrp/react-explorer

@tmnrp/react-explorer is a lightweight latest treanding markup to display the explorer.

# Features

- Configurable html attributes with ease.

### Examples [link](https://tmnrp-react-ui.vercel.app/explorer)

```sh
https://tmnrp-react-ui.vercel.app/explorer
```

### Installation [link](https://www.npmjs.com/package/@tmnrp/react-explorer)

```sh
$ npm i @tmnrp/react-explorer
```

### Properties

@tmnrp/react-explorer (IExplorer) is currently extended with the following properties.

| Properties | type                 | Description                                                         |
| ---------- | -------------------- | ------------------------------------------------------------------- |
| items      | Array<IExplorerItem> | Array of items to be displayed in the explorer component.           |
| ...props   | HTML UL props        | Common HTML UL properties that needs to be applied to the explorer. |

@tmnrp/react-explorer (IExplorerItem) is currently extended with the following properties.

| Properties | type                  | Description                                                          |
| ---------- | --------------------- | -------------------------------------------------------------------- |
| icon       | React.ReactNode       | Icon component to be displayed.                                      |
| label      | React.ReactNode       | Label component to be displayed.                                     |
| itemProps  | HTML div props        | Common HTML DIV properties that needs to be applied to the explorer. |
| items      | Array<IExplorerItems> | Array of items to be displayed in the explorer component.            |
| ...props   | HTML UL props         | Common HTML UL properties that needs to be applied to the explorer.  |

### Implementation

```
import { Explorer, IExplorerItem } from "@tmnrp/react-explorer";

//
const App = () => {
  const router = useRouter();

  //
  return (
    <div className="pb-2 border-b dark:border-b-gray-800">
      <Explorer items={getExplorerContent({ router })} />
    </div>
  );
};

//
export const getExplorerContent = ({
  router,
}: {
  router: NextRouter;
}): Array<IExplorerItem> => [
  {
    icon: <GoogleMaterialIcons iconName="double_arrow" />,
    label: "Breadcrumbs",
    items: [
      {
        label: "Example 1",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.BREADCRUMBS.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="interests" />,
    label: "Google material icons",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.GOOGLE_MATERIAL_ICONS.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="sync" />,
    label: "Progressbar",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.PROGRESSBAR.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Theme-switcher",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.THEME_SWITCHER.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Sidebar",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.SIDEBAR.PATH),
        },
      },
    ],
  },
  {
    icon: <GoogleMaterialIcons iconName="smart_button" />,
    label: "Explorer",
    items: [
      {
        label: "Examples",
        icon: <GoogleMaterialIcons iconName="view_list" />,
        itemProps: {
          onClick: () => router.push(CONST_PAGES.EXPLORER.PATH),
        },
      },
    ],
  },
];

```

### Todos

- Let me know :-)

## License

MIT Tony Martin
