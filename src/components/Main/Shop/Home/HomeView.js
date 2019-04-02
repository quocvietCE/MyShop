import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "./TopProduct";
import { Actions } from "react-native-router-flux";
import initData from "../../../../api/initData";

// 2-Apr-2019 dùng lại navigation
export default class HomeView extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     types: [],
//     topProducts: []
//   };
// }

// componentDidMount() {
//   // fetch("http://10.102.1.236/api_MyShop/")
//   //   .then(res => res.json())
//   initData().then(resJSON => {
//     const { type, product } = resJSON;
//     this.setState({ types: type, topProducts: product });
//   });
// }

  render() {
    // const { types, topProducts } = this.state;
    const { types, topProducts } = this.props.screenProps;
    // const { navigation } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#DBDBD8" }}>
        <Collection />
        <Category
          navigation={this.props.navigation}
          // navigation={navigation}
          // types={this.props.navigation.getParam(types)}
          types={types}
        />
        <TopProduct
          navigation={this.props.navigation}
          // navigation={navigation}
          topProducts={topProducts}
        />
      </ScrollView>
    );
  }
}
// 2-Apr-2019 dùng lại navigation

// const HomeView = props => {
//   const { types, topProducts } = props.screenProps;
//   const { navigation } = props.navigation;

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "#DBDBD8" }}>
//       <Collection />
//       <Category
//         navigation={props.navigation}
//         navigation={navigation}
//         // types={this.props.navigation.getParam(types)}
//         types={types}
//       />
//       <TopProduct 
//       // navigation={props.navigation} 
//       navigation={navigation} 
//       topProducts={topProducts} />
//     </ScrollView>
//   );
// };

// export default HomeView;
