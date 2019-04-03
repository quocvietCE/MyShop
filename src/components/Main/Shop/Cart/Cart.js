import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Scene, Router, Actions } from "react-native-router-flux";
import ProductDetail from "../ProductDetail/ProductDetail";
import CartView from "./CartView";

const CartStackNavigator = createStackNavigator(
  {
    CART_VIEW: {
      screen: CartView,
      navigationOptions: {
        title: "Cart View",
        header:null
      }
    },
    PRODUCT_DETAIL_CART: {
      screen: ProductDetail,
      navigationOptions: {
        title: "Product Detail",
        header:null
      }
    }
  },
  {
    initialRouteName: "CART_VIEW"
  }
);

export default (CartStackNavigatorContainer = createAppContainer(
  CartStackNavigator
));

// class RouterCart extends Component {
//   render() {
//     const { cartArray } = this.props;
//     return (
//       <Router>
//         <Scene key="CART">
//           <Scene
//             key="CART_VIEW"
//             component={CartView}
//             hideNavBar
//             cartArray={cartArray}
//           />
//           <Scene key="PRODUCT_DETAIL" component={ProductDetail} hideNavBar />
//         </Scene>
//       </Router>
//     );
//   }
// }

// export default RouterCart;
