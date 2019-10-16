// This is the first file that ReactNative will run when it starts up.
//
// We jump out of here immediately and into our main entry point instead.
//
// It is possible to have React Native load our main module first, but we'd have to
// change that in both AppDelegate.m and MainApplication.java.  This would have the
// side effect of breaking other tooling like mobile-center and react-native-rename.
//
// It's easier just to leave it here.

// import "./app/app.tsx"
// import {StorybookUIRoot} from "./storybook";
// import {AppRegistry} from "react-native";
// import {App} from "./app/app";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, createContext} from 'react';
import ScreenApp from './src/screen';
import {CartProvider} from './src/global';
import {AppRegistry} from "react-native";
import {AppProvider} from "./src/AppProvider";

export default class App extends Component {
    render() {
        return (
           <AppProvider>
               <ScreenApp/>
           </AppProvider>
        )
    }

}



const APP_NAME = "ProjectDVH"

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false

const RootComponent = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App
AppRegistry.registerComponent(APP_NAME, () => RootComponent)




