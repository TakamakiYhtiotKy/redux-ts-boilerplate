# Why?

React with redux is a complicated framework, and it gives the developer plenty of options how to do things. The intention of this repo is to provide one proven way of doing things, and also to make it faster to get started with new projets.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run lint`

Checks codebase for style errors with Eslint.

### `npm run lint:fix`

Checks for linting errors and automatically fixes eslint errors that are automtacially fixable.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Runs tests runner and displays test coverage.

### `npm run test:update-snapshots`

Updates snapshot test snapshots.
Read more here: https://jestjs.io/docs/en/snapshot-testing and https://testing-library.com/docs/dom-testing-library/example-intro

### `npm run cypress:open`

Open Cypress GUI.

### `npm run e2e`

Runs all E2E tests. Should be done before release to test or production. Should be ran against production mode of React. Running against development mode of React causes test errors.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Writing tests

It is recommended to use React-Testing-Library for React specific code. https://testing-library.com/docs/react-testing-library/intro

It provides necessary functionality to fluently test DOM interactions like pressing a button or typing text, and also capability for snapshot testing. see **tests** folder in components and containers folders for examples.

For Ducks it is recommended to use redux-saga-test-plan library and regular Jest tests. https://github.com/jfairbank/redux-saga-test-plan

For examples see **tests** folder in ducks folder. Tests for sagas can also be written with only Jest, but this may not be as easy.

## Suggest changes

Pull requests are very welcome! Please just add Valtteri Laine as reviewer. This is far from perfect so improvements should be made.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
