/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { View } from "react-native";
import RouterStackNavigator from "./src/components/Router";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1}}>
        <RouterStackNavigator />
      </View>
    );
  }
}

