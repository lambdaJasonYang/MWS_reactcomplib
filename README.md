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
npx storybook init
```

if the stories directory is made in your src folder, then just move it out a level to the root folder (makes it look cleaner)

also you will have to modify the `"stories" : [..]` in your .storybook/main.js, if the stories folder was created in your src folder and you moved it out a level. 

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

add to package.json scripts

```
   "storybook": "export NODE_OPTIONS=--openssl-legacy-provider && start-storybook -p 6006",
```

```
npm run storybook
```



# Browser-sync

```
npm install --save-dev browser-sync
```