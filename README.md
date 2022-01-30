A working project can be found here:

# API Search App

## General description

The app makes an API request on loading and displays a product list.
A search can then be performed filtering the fetched results; the search is done after
the users stops typing.

The project is implemented using React (with TypeScript) alongside the Styled Components
library for CSS styling. As per task instructions, the project consists of a mix of class and functional
components while also employing React hooks.

## Project structure

1. The entry file is App.tsx:
    - Contains the global styles file of the project
    - Contains the header component which, in turn, contains the logo component
    - Contains the main section component which, in turn, contains the search bar component
2. MainSection.tsx file:
    - Carries out an API call using Axios on mount
    - Filters the fetched results according to the search query
    - Contains state for fetched results, filtered results, search query and loading state
    - Contains the search bar component
3. The components are located in the src/components folder with a separate subfolder /styles
    for component styles. 

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the project dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
