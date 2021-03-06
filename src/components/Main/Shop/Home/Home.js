import { createAppContainer, createStackNavigator } from "react-navigation";

import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import HomeView from "./HomeView";
import ProductDetail from "../ProductDetail/ProductDetail";
import ListProduct from "../ListProduct/ListProduct";
import Category from "./Category";
import Collection from "./Collection";
import TopProduct from "./TopProduct";

// console.log(this.props.types)

const HomeStackNavigator = createStackNavigator(
  {
    HOME_VIEW: {
      screen: HomeView,
      // screenProps=(props.types),
      // types={{proptypes}}
      // params: { types: screenProps },
      // types: { types },
      navigationOptions: {
        // title: "Home View"na
        header: null
      }
    },
    LIST_PRODUCT: {
      screen: ListProduct,
      navigationOptions: {
        title: "List Product",
        header: null
      }
    },
    PRODUCT_DETAIL: {
      screen: ProductDetail,
      navigationOptions: {
        title: "Product Detail",
        header: null
      }
    }
  },
  {
    initialRouteName: "HOME_VIEW"
    // initialRouteParams:{types:this.state.types}
  }
);

{
  /* <HomeStackNavigator screenProps={this.props.types}/> */
}
// export default HomeStackNavigator;

export default (HomeStackNavigatorContainer = createAppContainer(
  HomeStackNavigator
));

/* 2-Apr-2019 dùng lại navigation

const Home = props => {
// class Home extends Component {
  // render() {
    console.log("----------------HOME_ROUTER---------------");
    // console.log(selectedTab);
    // const { types, topProducts } = this.props;
    const { types, topProducts } = props;
    return (
      <Router>
        <Scene key="HOME">
          <Scene
            key="HOME_VIEW"
            component={HomeView}
            hideNavBar
            types={types}
            topProducts={topProducts}
          />
          <Scene key="LIST_PRODUCT" component={ListProduct} hideNavBar />
          <Scene key="PRODUCT_DETAIL" component={ProductDetail} hideNavBar />
          <Scene key="TOPPRODUCT" component={TopProduct} hideNavBar />
          <Scene key="CATEGORY" component={Category} hideNavBar />
          <Scene key="COLLECTION" component={Collection} hideNavBar />
        </Scene>
      </Router>
    );
  // }
}

export default Home;

2-Apr-2019 dùng lại navigation */ 
