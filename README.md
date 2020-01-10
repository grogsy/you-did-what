A todo app: with extra steps, wip

# For Testing on Mac/Linux
Change the test script in package.json to './{,!(node_modules)/**}/*.test.js'

# Building and Running
```
npm run build
npm run start
```
# Have Webpack bundle immediate changes in front-end code
Open one terminal and set webpack to watch files:

`npm run build-watch`

Then you can run the server normally

`npm run start`