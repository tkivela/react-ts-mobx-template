# react-ts-mobx-app

a project with React, MobX, Emotion and TypeScript

Details:
* State management with [MobX](https://mobx.js.org/)
* CSS in JS with [Emotion](https://emotion.sh/)
* HTTP requests with [Axios](https://github.com/axios/axios)
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

* Runs unit tests (with Jest) .

### `yarn build`

Runs `yarn test` and if it succeeds then builds the app for production to the `build` folder.<br>
The build is minified and the filenames include the hashes.<br>

### Directory structure

* *apis* directory contains code for external api interactions.
* *components* directory contains reusable components.
* *stores* directory contains MobX store definitions.
* *views* directory contains views which are routed to different urls.

```
└── src
    ├── apis
    ├── components
    │   ├── CustomButton
    │   ├── Note
    │   └── TopNavigation
    ├── stores
    │   └── notes
    └── views
        ├── App
        ├── NoteCount
        └── Notes
```

### Example project features

The project contains simple application to demonstrate following features:

* Observables & Observers
* Actions (both sync & async)
* Computed state
* Calling an API with async action and updating results to MobX store
* Linting & Formatting
* Testing actions & store with Jest unit tests
* Testing automatically mocked external api with Jest unit tests
* Styling components with CSS-in-JS (Emotion)
* Including devtools (mobx-react-devtools)
* Including decorator features to CRA based setup (with react-app-rewired)