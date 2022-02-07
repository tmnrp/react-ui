# @tmnrp/react-sidebar

@tmnrp/react-sidebar is a lightweight latest treanding markup to display the sidebar.

# Features

- Configurable html attributes with ease.

### Examples [link](https://tmnrp-react-ui.vercel.app/sidebar)

```sh
https://tmnrp-react-ui.vercel.app/sidebar
```

### Installation [link](https://www.npmjs.com/package/@tmnrp/react-sidebar)

```sh
$ npm i @tmnrp/react-sidebar
```

### Properties

@tmnrp/react-sidebar (ISidebar) is currently extended with the following properties.

| Properties       | type                        | Description                                                         |
| ---------------- | --------------------------- | ------------------------------------------------------------------- |
| isExpanded       | boolean                     | Default theme value to start with.                                  |
| isExpandedWidth? | string , number , undefined | Renderable children receives theme as parameter.                    |
| ...props         | HTML div props              | Common HTML div properties that needs to be applied to the sidebar. |

### Implementation

```
import { useSidebar, SidebarToggler, Sidebar } from "@tmnrp/react-sidebar";

const App = () => {
  const { isExpanded, toggle } = useSidebar();

  //
  return (
    <div className="pb-2 border-b dark:border-b-gray-800">
      <div>
        <SidebarToggler
          isExpanded={isExpanded}
          toggle={toggle}
          isExpandedIcon={<GoogleMaterialIcons iconName="menu_open" />}
          isCollapsedIcon={<GoogleMaterialIcons iconName="menu" />}
        />
      </div>
      <div>
        <Sidebar
          className="whitespace-nowrap"
          isExpanded={isExpanded}
          isExpandedWidth={`100%`}
        >
          <div>This is side bar</div>
          <div>lorem20</div>
        </Sidebar>
      </div>
    </div>
  );
};
```

### Todos

- Let me know :-)

## License

MIT Tony Martin
