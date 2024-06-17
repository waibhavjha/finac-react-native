///**
// * @format
// */
//
//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';
//
//AppRegistry.registerComponent(appName, () => App);
// index.js
import { AppRegistry } from 'react-native';
import Navigator from './components/Navigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
