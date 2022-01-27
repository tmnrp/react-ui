# @tmnrp/react-progressbar

@tmnrp/react-progressbar is a lightweight latest treanding markup to display the progressbar.

# Features

- Configurable height, frequency and all html attributes with ease.

### Examples [link](https://tmnrp-react-ui.vercel.app/progressbar)

```sh
https://tmnrp-react-ui.vercel.app/progressbar
```

### Installation [link](https://www.npmjs.com/package/@tmnrp/react-progressbar)

```sh
$ npm i @tmnrp/react-progressbar
```

### Properties

@tmnrp/react-progressbar (IProgressbar) is currently extended with the following properties.

| Properties | type           | Description                                                       |
| ---------- | -------------- | ----------------------------------------------------------------- |
| frequency  | number         | Duration in which the progressbar should increment.               |
| height     | number         | Height of the progressbar.                                        |
| ...props   | HTML div props | Common HTML div properties that needs to be applied to the crumb. |

IProgressbarMethods is currently extended with the following methods.

| Properties | type     | Description             |
| ---------- | -------- | ----------------------- |
| activate   | function | Starts the progressbar. |
| kill       | function | Stops the progressbar.  |

### Implementation for single page breadcrumb

```
import { Progressbar, IProgressbarMethods } from "@tmnrp/react-progressbar";

const App = () => {
  const pbRef = useRef<IProgressbarMethods>(null);

  //
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Progressbar ref={pbRef} className="bg-red-400" frequency={100} height={10} />
      <button
        onClick={() => {
          pbRef?.current?.activate();
        }}
      >
        Activate
      </button>

      <button
        onClick={() => {
          pbRef?.current?.kill();
        }}
      >
        Kill
      </button>
    </div>
  );
};
```

### Todos

- Let me know :-)

## License

MIT Tony Martin
