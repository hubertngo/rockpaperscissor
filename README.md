# React Native Boilerplate with Expo
🚀A powerful react native starter template that bootstraps development of your mobile application.

## How to setup and start this project
#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/hubertngo/rockpaperscissor.git

# Install dependencies
yarn
```

#### 2. Open RNS with Expo

First, you need to install Expo CLI (if you don't have it yet). You can do it by running the following command in terminal:
```
npm install expo-cli --global
```

Then you can start the project by going to the project's folder and running there:
```
yarn start
```
## Architecture
### Redux & Redux-saga
- Redux and Redux-saga have been installed.
### React Navigation
- Use React Navigation for routing and navigation
## How do I organize my code
This codebase followed the trickly functional programming concept. Therefore, all components are written as functions and use React Hooks to handle the life cycle.
### assets
The assets directory contains all the assets used in the app, including images, fronts.
### components
The components directory should contains React Native components, which take their inputs in as props.

A component should be written as a plain JavaScript function component.

If a component implementation differs between iOS and Android versions of the application, create separate .android.js and .ios.js files for the component. In minor cases the React.Platform.OS property can be used to branch between platforms.
### constants
The constants folder contains all constant variables of the app such as API link, main text color, primary color, secondary color, etc.
### navigation
The navigation directory contains all configs of react-navigation. If you have a new screen, you should edit MainTabNavigator.js file.
### redux
- reducers: contains all reducers
- actions: define all actions of the corresponding reducer
- sagas: contains all saga config files
  + src/redux/sagas/Middleware.js file to add a middleware for every call API request. This middleware will handle error(if needed), return response data and fill it into redux.
  + src/redux/sagas//auth.js file to handle authentication flow for app.
### screens
the screens directory contains all screens of this app. Typically each screen is equivalent to an Tab Navigator.
### utils
the utils directory contains very short and specific functions used throughout app.
React Redux Redux-Saga React Navigation
## What is the support development tools inside this project
- Expo: a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
- react-dot-env: add environments variables from .env file
- eslint: All coding convention are defined on .eslintrc. By following the convention, codebase ensure both code quality and coding style issues.
- redux-logger: Logger for Redux
- babel-plugin-module-resolver: setup a custom alias for directories, specific files, or npm modules.


## Author
Ngo An Ninh <ninh.uit@gmail.com>
