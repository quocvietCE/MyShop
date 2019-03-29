import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeView from "./HomeView";
import ProductDetail from "../ProductDetail/ProductDetail";
import ListProduct from "../ListProduct/ListProduct";

// console.log(this.props.types)

const HomeStackNavigator = createStackNavigator(
  {
    HOME_VIEW: {
      screen: HomeView,
      // screenProps=(this.props.types)
      // types={screenProps}
      // params: { types: screenProps },
      // types: { types },
      navigationOptions: {
      //   // title: "Home View"na
        header:null
      }
    },
    LIST_PRODUCT: {
      screen: ListProduct,
      navigationOptions: {
        title: "List Product",
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
    initialRouteName: "HOME_VIEW",
    // initialRouteParams:{types:this.state.types}
  }
);

{/* <HomeStackNavigator screenProps={this.props.types}/> */}

export default (HomeStackNavigatorContainer = createAppContainer(
  HomeStackNavigator
));
