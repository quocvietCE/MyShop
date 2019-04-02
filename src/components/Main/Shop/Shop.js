import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import TabNavigator from "react-native-tab-navigator";

import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import Header from "./Header";
import global from "../../global";

import homeIconS from "../../../media/appIcon/home.png";
import homeIcon from "../../../media/appIcon/home0.png";
import cartIconS from "../../../media/appIcon/cart.png";
import cartIcon from "../../../media/appIcon/cart0.png";
import searchIconS from "../../../media/appIcon/search.png";
import searchIcon from "../../../media/appIcon/search0.png";
import contactIconS from "../../../media/appIcon/contact.png";
import contactIcon from "../../../media/appIcon/contact0.png";

import saveCart from "../../../api/saveCart";
import getCart from "../../../api/getCart";
import initData from "../../../api/initData";

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home",
      // types: [], làm bên HomeView.
      types: [],
      cartArray: [],
      topProducts: [] //làm bên HomeView
    };
    global.addProductToCart = this.addProductToCart.bind(this);
    global.incrQuantity = this.incrQuantity.bind(this);
  }

  componentWillMount() {
    // getCart().then(cartArray => this.setState({ cartArray }));
  }

  componentDidMount() {
    initData().then(resJSON => {
      const { type, product } = resJSON;
      this.setState({ types: type, topProducts: product });
      console.log("-----------Shop-------------");
      console.log(topProducts);
    });
    getCart().then(cartArray => this.setState({ cartArray }));
  } //làm bên HomeView

  addProductToCart(product) {
    // setState là một phương thức bất đồng bộ
    this.setState(
      { cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
      () => saveCart(this.state.cartArray)
    );
    // saveCart(this.state.cartArray)
  }

  incrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId) return e;
      return { product: e.product, quantity: e.quantity + 1 };
    });
    this.setState({ cartArray: newCart });
  }

  decrQuantity(productId) {}

  render() {
    const { iconStyle } = styles;
    const { selectedTab, cartArray, types, topProducts } = this.state;
    console.log("----------------selectedTab---------------");
    console.log(selectedTab);
    return (
      <View style={{ flex: 1 }}>
        <Header onOpen={() => this.props.navigation.openDrawer()} />
        {/* <ShopTabNavigator /> */}
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === "home"}
            title="Home"
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => (
              <Image source={homeIconS} style={iconStyle} />
            )}
            onPress={() => this.setState({ selectedTab: "home" })}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Home
              // types={types}
              // topProducts={topProducts}
              screenProps={{ types, topProducts }}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === "cart"}
            title="Cart"
            renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
            renderSelectedIcon={() => (
              <Image source={cartIconS} style={iconStyle} />
            )}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: "cart" })}
            badgeText={cartArray.length}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Cart screenProps={{ cartArray }} />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === "search"}
            title="Search"
            renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
            renderSelectedIcon={() => (
              <Image source={searchIconS} style={iconStyle} />
            )}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: "search" })}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Search />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={selectedTab === "contact"}
            title="Contact"
            renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
            renderSelectedIcon={() => (
              <Image source={contactIconS} style={iconStyle} />
            )}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: "contact" })}
            selectedTitleStyle={{ color: "#34B089", fontFamily: "Avenir" }}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

// const StackShopTabNavigator = createBottomTabNavigator(
//   {
//     HOME: {
//       screen: Home,
//       navigationOptions: {
//         tabBarLabel: "HOME",
//         tabBarIcon: <Image source={homeIconS} />
//       }
//     },

//     CONTACT: {
//       screen: Contact,
//       navigationOptions: () => ({
//         title: "CONtact",

//         tabBarIcon: () => {
//           return <Image source={contactIconS} />;
//         }
//       })
//     },

//     CART: {
//       screen: Cart,
//       navigationOptions: {
//         tabBarLabel: "Cart",
//         tabBarIcon: <Image source={cartIcon} />
//       }
//     },

//     SEARCH: {
//       screen: Search,
//       navigationOptions: {
//         tabBarLabel: "Search",
//         tabBarIcon: <Image source={searchIcon} />
//       }
//     }
//   },
//   {
//     swipeEnabled: true,
//     tabBarOptions: {
//       style: {
//         backgroundColor: "#dddddd"
//       },
//       inactiveTintColor: "green",
//       activeTintColor: "red"
//     },
//     initialRouteName: "HOME",
//     order: ["HOME", "CONTACT", "CART", "SEARCH"]
//   }
// );

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20
  }
});

// const ShopTabNavigator = createAppContainer(StackShopTabNavigator);
