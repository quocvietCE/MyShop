import { createAppContainer, createStackNavigator } from "react-navigation";
import Main from "./Main/Main";
import Authentication from "./Authentication/Authentication";
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from "./OrderHistory/OrderHistory";

const RouterStackNavigator = createStackNavigator(
  {
    MAIN: {
      screen: Main,
      navigationOptions:
      {
        title:'Trang Chu',
        header:null
      },

    },
    AUTHENTICATION: {
      screen: Authentication,
      navigationOptions:
      {
        title:'Authentication',
      },
      
    },
    CHANGE_INFO: {
      screen: ChangeInfo,
      navigationOptions:
      {
        title:'Thay Đổi thông tin ',
      },
    },
    ORDERHISTORY: {
      screen: OrderHistory,
      navigationOptions:
      {
        title:'Order History',
      },
      
    }
  },
  {
    initialRouteName: "MAIN",
  }
);

export default createAppContainer(RouterStackNavigator);
