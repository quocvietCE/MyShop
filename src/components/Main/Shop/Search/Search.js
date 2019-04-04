import { createAppContainer, createStackNavigator, Header } from "react-navigation";
import ProductDetail from "../ProductDetail/ProductDetail";
import SearchView from "./SearchView";

const SearchStackNavigator = createStackNavigator(
  {
    SEARCH_VIEW: {
      screen: SearchView,
      navigationOptions: {
        // title: "Search View"
        header: null
        

      }
    },
    PRODUCT_DETAIL: {
      screen: ProductDetail,
      navigationOptions: {
        // title: "Product Detail"
        header: null
      }
    }
  },
  {
    initialRouteName: "SEARCH_VIEW"
  }
);

export default (SearchStackNavigatorContainer = createAppContainer(
  SearchStackNavigator
));
