/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation'
// type Props = {};
import { Provider } from 'react-redux';
import store from './src/redux';

export default class App extends Component{

  render() {
    return (
      <Provider store={store}>
          <AppNavigation />
      </Provider>
    );
  }
}