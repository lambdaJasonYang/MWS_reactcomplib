# Making this template

* Why not a bundler?
    * Bundle and minify the final app, not the library.
    * 
add below to package.json

```
mkdir src
mkdir src/components
mkdir dist
mkdir dist/components
touch src/index.ts
```

```
npm i --save-dev typescript
npm i --save-dev @types/react
```

```
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
```

```
#generate tsconfig.json file
tsc init 
```

tsconfig.json
```
"jsx": "react",
 "module": "esnext",  
"rootDir": "./src",   
"outDir": "./dist", 
"exclude": ["dist","doc","docs","stories","storybook-static","node_modules", "jest.config.ts", "**/*.spec.ts"]  
```


# Storybook

```
npm install --save-dev react react-dom
npm install --save-dev @storybook/manager-webpack5 @storybook/builder-webpack5

```

if the stories directory is made in your src folder, then just move it out a level to the root dir (makes it look cleaner)

also you will have to modify your .storybook/main.js, if the stories dir was creates in your src folder, expected 

```
module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}
```

```
export NODE_OPTIONS=--openssl-legacy-provider
npm run storybook
```

