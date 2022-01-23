## Getting started

npm init

npm i -D @types/node @types/react @types/react-dom react react-dom typescript

add peer dependencies in package.json

```
"peerDependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
},
```

add main, module and files in package.json

```
"main": "dist/cjs/index.js",
"module": "dist/esm/index.js",
"files": [
  "dist"
],
```

add scripts to package.json

```
"scripts": {
  "build": "rm -rf dist/ && npm run build:esm && npm run build:cjs",
  "build:esm": "tsc",
  "build:cjs": "tsc --module CommonJS --outDir dist/cjs",
  "build:pub:patch": "npm run build && npm version patch && npm publish --access public",
  "build:pub:minor": "npm run build && npm version minor && npm publish --access public",
  "build:pub:major": "npm run build && npm version major && npm publish --access public"
},
```

create tsconfig.json

```
npx tsc --init
```

update tsconfig.json

```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "declaration": true,
    "esModuleInterop": true,
    "jsx": "react",
    "lib": ["ES5", "ES2015", "ES2016", "DOM", "ESNext"],
    "types": ["node"],
    "module": "ES2015",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "outDir": "dist/esm",
    "sourceMap": true,
    "strict": true,
    "target": "ES6"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"]
}
```

create src/index.tsx
