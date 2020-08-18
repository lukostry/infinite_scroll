This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run?

This project could be run alongside [Prism](https://github.com/stoplightio/prism). To start a server run:

```
prism mock -d ./mocks/travelist.yaml
```

To run FE app:

1. Install dependecies: `yarn install` (I recommend using `yarn`, I've added a `resoultion` field in `package.json` to prevent the following bug in the current CRA/TS pipeline: https://github.com/typescript-eslint/typescript-eslint/issues/1746).
2. Run the app: `yarn start` - it will open [http://localhost:3000](http://localhost:3000) in your browser.

## Description

This is super simple app which showcases infinite scroll and scroll restoration. There're two routes:

- `/` -- root route: lists offers retrieved from the mocked BE API, when scrolling down new items will be automatically loaded. If there is no overflow, use `Load more` button.
- `/offer/:id` -- displays details for a given offer, there is also `Back` link which navigates to the root routes

## Stack

- React
- TypeScript
- Redux
- React Router
- Recoil - experimental state management library (to try new stuff and have some fun)

## TODO/missing stuff

- Error handling
- Handle loading state - display spinner or some loading indicator
- Better styling - use CSS modules or some CSSinJS solution
- fetch data for a single offer under `/offer/:id` route (for now I'm just taking a value from the `redux` store)
