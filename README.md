# react-ts-mobx-app

a project with React, MobX, Emotion and TypeScript

Details:
* State management with [MobX](https://mobx.js.org/)
* CSS in JS with [Emotion](https://emotion.sh/)
* HTTP requests with [Axios](https://github.com/axios/axios)
* Routing with [Mobx-react-router](https://github.com/alisd23/mobx-react-router ) and [React-router](https://reacttraining.com/react-router/)
* Linting with [TSLint](https://github.com/palantir/tslint)
* Code formatting with [Prettier](https://prettier.io/)
* Testing with [Jest](https://facebook.github.io/jest/)

Setup is based on Create-react-app 's TypeScript version (react-scripts-ts) but also has some additional features such as decorator syntax (made possible with react-app-rewired).

## Prerequisites

You should have Yarn (https://yarnpkg.com/en/) installed. Then run
`yarn`
in project directory to install package dependencies.

### Commands

### `yarn start`

Starts your project and opens it automatically in browser.

### `yarn test`

* Formats code (with Prettier)
* Runs code linting & fixes lint problems if it can (with TSLint)
* Runs unit tests (with Jest) .

### `yarn build`

Runs `yarn test` and if it succeeds then builds the app for production to the `build` folder.<br>
The build is minified and the filenames include the hashes.<br>

### Directory structure

* *components* directory contains reusable components.
* *stores* directory contains MobX store definitions.
* *views* directory contains views which are routed to different urls.

```
└── src
    ├── components
    │   ├── CustomButton
    │   ├── Note
    │   ├── Notes
    │   └── TopNavigation
    ├── stores
    │   └── app
    └── views
        ├── App
        └── NoteCount
```

### Example project features

The project contains simple application to demonstrate following features:

* Observables & Observers
* Actions (both sync & async)
* Computed state
* Calling an API with async action and updating results to MobX store
* Linting & Formatting
* Testing actions & store with Jest unit tests
* Routing components to different urls while sharing the same MobX stores
* Styling components with CSS-in-JS (Emotion)
* Including devtools (mobx-react-devtools)
* Including decorator features to CRA based setup (with react-app-rewired)