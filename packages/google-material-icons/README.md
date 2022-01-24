# @tmnrp/react-google-material-icons

@tmnrp/react-google-material-icons is a lightweight latest treanding markup to display the google material font icons.

# Features

- Configurable type, iconName with with ease.

### Examples [link](https://tmnrp-react-ui.vercel.app/google-material-icons)

```sh
https://tmnrp-react-ui.vercel.app/google-material-icons
```

### Installation [link](https://www.npmjs.com/package/@tmnrp/react-google-material-icons)

```sh
$ npm i @tmnrp/react-google-material-icons
```

### Properties

@tmnrp/react-google-material-icons (IGoogleMaterialIcons) is currently extended with the following properties.

| Properties | type                                        | Description                                              |
| ---------- | ------------------------------------------- | -------------------------------------------------------- |
| type       | "outlined" , "round" , "sharp" , "two-tone" | Default type is "filled", not required to pass any type. |
| iconName   | string                                      | The name as provided in the google material icons.       |

### Implementation

```
import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";

const App = () => (
  <div>
    <GoogleMaterialIcons iconName="home" />
    <GoogleMaterialIcons iconName="home" type="outlined" />
    <GoogleMaterialIcons iconName="home" type="round" />
    <GoogleMaterialIcons iconName="home" type="sharp" />
    <GoogleMaterialIcons iconName="home" type="two-tone" />
  </div>
);

```

### Todos

- Let me know :-)

## License

MIT Tony Martin
