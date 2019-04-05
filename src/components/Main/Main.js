import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Menu from "./Menu";
import Shop from "./Shop/Shop";
import Authentication from "../Authentication/Authentication";
import OrderHistory from "../OrderHistory/OrderHistory";
import ChangeInfo from "../ChangeInfo/ChangeInfo";

// export default class Main extends React.Component {
//   render() {
//     return (
//         <MainDrawerNavigator/>
//     );
//   }
// }

const StackMainDrawerNavigator = createDrawerNavigator(
  {
    SHOP: {
      screen: Shop
    },
    MENU: {
      screen: Menu
    },
    AUTHENTICATION: {
      screen: Authentication
    },
    ORDERHISTORY: {
      screen: OrderHistory
    },
    CHANGE_INFO: {
      screen: ChangeInfo
    }
  },
  {
    contentComponent: Menu
    // initialRouteName: "MENU",
  }
);

const MainDrawerNavigator = createAppContainer(StackMainDrawerNavigator);

export default MainDrawerNavigator;
