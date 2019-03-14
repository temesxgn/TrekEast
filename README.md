# Monorepo for TrekEast 
by [Temesxgn Gebrehiwet](https://www.upwork.com/fl/temesxgngebrehiwet)

## Table of Content
  * [Project Structure](#project-structure)
  * [Single Source of Truth](#single-source-of-truth)
  * [Constructing a Design Language System](#constructing-design-language-system)
  * [Making Our API Universally Available](#making-our-api-universally-available)
  * [Universal Component Library](#universal-component-library)
  * [Configuration](#configuration)

## Project Structure
### Monorepo created with Lerna

    | NPM Package       | Description                  |
    |-------------------|------------------------------|
    | native-apps       | IOS & Android Apps           |
    | web-app           | Create React Web App         |
    | sketch-app        | DLS Sketch File              |
    | storybooks        | Component Documentation      |
    | requests-library  | GraphQL Requests Library     |
    | component-library | Universal Component Library  |

## Single Source of Truth
    Jon Gold at Airbnb proposed the concept of the Single Source of Truth system where definitions of all the pieces that make up a Design Language System (DLS) live. From there, many different applications can pull from that Single Source of Truth to ensure consistency across the user interfaces. In theory, the system is completely platform agnostic

## Constructing a Design Language System
Set of rules for building a visual identity  to construct a consistent experience across all product mediums. This set of rules can define things like:

* Typography
* Colors
* Layouts
* User Interface components

## Making Our API Universally Available
In addition to making our user interfaces render universally, we needed to make data from our server universally available to them. We decided to use GraphQL as the communication layer between the client apps and the server. GraphQL offers flexibility and integrates well with React.

This led to us creating a package of reusable GraphQL queries, mutations, and fragments (basically the definition of the requests you want to make against the server). These requests run within Javascript on any of the platforms, and their results can be pushed into the components.

To make this process simple we used Apollo as our GraphQL client. This allowed us to wrap our presentational components from the Universal Component library with queries from our GraphQL package using higher order components. As soon as information that a component needs becomes available, the higher order component provides it via the props.

## Universal Component Library

Single Source of Truth containing Design Language System and Reusable React components

### Benefits
* Designer
  * `Prototype with real data. Ping your API and pass the results directly into your mockups. This lets you see what your app will really look like (no more lorem ipsum).`
  * `Prototype internationalization. Use Google translate to test how user interfaces look in other languages and output results side by side.`
  * `Keep assets in sync with actual deployed code.`
* Developers
  * `Less code to manage. If you can reuse code across platforms, you can save time, effort, and energy.`
  * `Code is all JavaScript. JavaScript powers the React side of all the applications, so engineers can seamlessly switch between working on the different platforms.`
* Business
  * `Do the math. If one engineer can now build for three platforms instead of one you’re going to save a lot of money, and it takes less time to ship for multiple platforms.`

## Configuration
Configuration details for each component
* Assuming lerna project already created (npx lerna init)

### Create React App
* `create-react-app web-app`
* `npm install --save react-dom react-native-web react-art` - web dependencies
* `npm run eject` - eject webpack configuration to disable ModuleScopePlugin. **VERY IMPORTANT to reference code outside of src folder

### Universal Component Library
* `npx lerna create @trekeast/component-library -y` - shared components module to be used with all platforms. Call from the root of the repository
* `npx lerna add react@^16.8.4` 
* `npx lerna add react-dom@^16.8.4`- make sure we have the same version of the React and ReactDOM in each package by calling lerna add from the root of the repository
* `npx lerna add react-primitives` 
* `npx lerna add @trekeast/component-library` - run every time after creating a component in component library
* `npx lerna clean -y && npx lerna bootstrap --hoist` - Hoisting dependencies to the root of the repository is possible. All packages are installed in the root of the repository, and node_modules local to packages contain only symlinks. We can now import modules from the common library.
* `npx lerna run start --scope=web-app` - to run web app

-- TODO:
* `npm install --save react-native` - Native IOS & Android
* `npm install --save react-sketchapp react-test-renderer` - Sketch
