# @tmnrp/react-breadcrumbs

@tmnrp/react-breadcrumbs is a lightweight latest treanding markup to display the navigation location path.

# Features

- Configurable seperators, icons and text with with ease.

### Examples [link](https://tmnrp-react-ui.vercel.app/breadcrumbs)

```sh
https://tmnrp-react-ui.vercel.app/breadcrumbs
```

### Installation [link](https://www.npmjs.com/package/@tmnrp/react-breadcrumbs)

```sh
$ npm i @tmnrp/react-breadcrumbs
```

### Properties

@tmnrp/react-breadcrumbs (IBreadcrumbs) is currently extended with the following properties.

| Properties     | type            | Description                                                            |
| -------------- | --------------- | ---------------------------------------------------------------------- |
| crumbs         | Array<ICrumb>   | Array of the crumbs, that will be displayed in the component.          |
| crumbProps     | HTML div props  | Common HTML div properties that needs to be applied on all crumbs.     |
| seperator      | React.ReactNode | Separator content.                                                     |
| seperatorProps | React.ReactNode | Common HTML div properties that needs to be applied on all seperators. |
| iconProps      | HTML div props  | Common HTML div properties that needs to be applied on all icons.      |
| labelProps     | HTML div props  | Common HTML div properties that needs to be applied on all labels.     |

@tmnrp/react-breadcrumbs (ICrumb) is currently extended with the following properties.

| Properties | type            | Description                                                       |
| ---------- | --------------- | ----------------------------------------------------------------- |
| icon       | React.ReactNode | Icon to be displayed on the crumb.                                |
| text       | React.ReactNode | Text to be displayed on the crumb.                                |
| ...props   | HTML div props  | Common HTML div properties that needs to be applied to the crumb. |

### Implementation for single page breadcrumb

```
import { Breadcrumbs, ICrumb } from "@tmnrp/react-breadcrumbs";

const App = () => {
  const breadcrumbRef = useRef<IBreadcrumbsMethods>(null);

  //
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
        <div>Only labels :</div>
          <Breadcrumbs
            crumbs={crumbs1}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Only icons :</div>
          <Breadcrumbs
            crumbs={crumbs2}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Both icons and labels :</div>
          <Breadcrumbs
            crumbs={crumbs3}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Mix and match :</div>
          <Breadcrumbs
            crumbs={crumbs4}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>

        <div className="flex flex-wrap justify-between pb-2 border-b dark:border-b-gray-800">
          <div>Clickable navigation links :</div>
          <BC
            crumbs={getCrumbs5(router)}
            className="flex flex-wrap"
            crumbsProps={{ className: "flex space-x-1 pr-2" }}
          />
        </div>
    </div>
  );
};

//
const crumbs: Array<ICrumb> = [
  { icon: "", label: "Home" },
  { icon: "", label: "Breadcrumbs" },
  { icon: "", label: "Example 1" },
];

```

### Implementation for a generic breadcrumb

```
// context / global storage
import { IBreadcrumbsMethods } from "@tmnrp/react-breadcrumbs";
const breadcrumbRef = useRef<IBreadcrumbsMethods>(null);

// Layout
import { ICrumb, useBreadcrumbs, Breadcrumbs } from "@tmnrp/react-breadcrumbs";

//
const { breadcrumbRef } = useContext(GlobalContext);
useBreadcrumbs?.({ ref: breadcrumbRef, crumbs: crumbs });

// return component
<header>
  <Breadcrumbs
    ref={breadcrumbRef}
    crumbs={crumbs}
    crumbsProps={{ className: "flex space-x-1 pr-2" }}
    seperator="/"
    labelProps={{}}
  />
</header>

//
//
const crumbs: Array<ICrumb> = [
  { icon: "", label: "Home" },
  { icon: "", label: "Breadcrumbs" },
  { icon: "", label: "Example 1" },
];

```

### Todos

- Let me know :-)

## License

MIT Tony Martin
