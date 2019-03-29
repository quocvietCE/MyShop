import { createAppContainer, createStackNavigator } from "react-navigation";
import ProductDetail from "../ProductDetail/ProductDetail";
import CartView from './CartView';

const CartStackNavigator = createStackNavigator(
  {
    CART_VIEW: {
      screen: CartView,
      navigationOptions: {
        title: "Cart View",
        header:null
      }
    },
    PRODUCT_DETAIL: {
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
