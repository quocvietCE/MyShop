import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Dimensions,
  FlatList
} from "react-native";

import global from "../../../global";

import sp1 from "../../../../media/temp/sp3.jpeg";
import sp4 from "../../../../media/temp/sp4.jpeg";
const url = "http://10.102.1.236/api_MyShop/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // listProduct: global.setArraySearch()
      listProduct: []
    };
    // console.log("======Search View SetArraySearch======")
    // console.log(this.state.listProduct)
    // console.log("============")
    global.setArraySearch = this.setSearchArray.bind(this);
    // global.setArraySearch  this.setSearchArray.bind(this);
  }

  // componentDidMount() {
  // this.setState({ listProduct: this.state.listProduct.concat(arrProduct) });
  // this.setState({ listProduct: this.state.listProduct.cloneWithRows(arrProduct) });
  // console.log("======Search View SetArraySearch======")
  // console.log(this.state.listProduct)
  // console.log("============")
  // }

  setSearchArray(arrProduct) {
    // console.log("======Search View SetArraySearch 1======");
    // console.log(arrProduct);
    // this.setState({ listProduct: JSON.parse(arrProduct) });
    this.setState({ listProduct: arrProduct });
    // this.setState({ listProduct: this.state.listProduct.concat(arrProduct) });
    // this.setState({ listProduct: this.state.listProduct.cloneWithRows(arrProduct) });
    // console.log("======Search View SetArraySearch 2======");
    // console.log(this.state.listProduct);
    // console.log("============");
  }

  // gotoDetail() {
  //   const { navigation } = this.props;
  //   navigation.navigate("PRODUCT_DETAIL");
  // }

  gotoDetail(product) {
    const { navigation } = this.props;
    navigation.navigate("PRODUCT_DETAIL", { product });
    // console.log("======CartView gotoDetail======");
    // console.log(product);
    // console.log("============");
    // Actions.PRODUCT_DETAIL();
  }

  render() {
    const {
      productStyle,
      mainRight,
      txtMaterial,
      txtColor,
      txtName,
      txtPrice,
      productImage,
      txtShowDetail,
      showDetailContainer,
      wrapper
    } = styles;
    // console.log("======render 1======");
    // console.log(this.state.listProduct);
    // const { listProduct } = this.state;
    // console.log("============");
    // const { dataSource } = this.state.listProduct;
    // console.log("======render 2======");
    // console.log(dataSource);
    // console.log("============");
    return (
      <View style={wrapper}>
        <FlatList
          // contentContainerStyle={wrapper}
          // data={dataSource}
          data={this.state.listProduct}
          // renderItem={({ item, index }) => {
          // renderItem={({ product }) => {
          renderItem={({ item }) => {
            // console.log("======FlatList======");
            // console.log(`Item = ${item}, index = ${index}`);
            // // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
            // console.log(`Item = ${JSON.stringify(item)}`);
            // console.log("============");
            // return <Text>Product Name {item.name}</Text>;
            return (
              <View style={productStyle}>
                <Image
                  source={{ uri: `${url}${item.images[0]}` }}
                  style={productImage}
                />
                <View style={mainRight}>
                  <Text style={txtName}>{toTitleCase(item.name)}</Text>
                  <Text style={txtPrice}>{item.price}$</Text>
                  <Text style={txtMaterial}>Material {item.material}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={txtColor}>Color {item.color}</Text>
                    <View
                      style={{
                        height: 15,
                        width: 15,
                        backgroundColor: item.color.toLowerCase(),
                        borderRadius: 15,
                        marginLeft: 10
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    style={showDetailContainer}
                    onPress={() => this.gotoDetail(item)}
                  >
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          // renderItem={({ item }) => {
          // <Text>Product Name {product.name}</Text>

          // console.log("======FlatList======");
          // // console.log(`Item = ${item}, index = ${index}`)
          // console.log(`Item = ${JSON.stringify(product)}`);
          // console.log("============");

          // <View style={productStyle}>
          //   <Image source={sp1} style={productImage} />
          //   <View style={mainRight}>
          //     <Text style={txtName}>{toTitleCase(item.name)}</Text>
          //     <Text style={txtPrice}>{item.price}$</Text>
          //     <Text style={txtMaterial}>Material {item.material}</Text>
          //     <View style={{ flexDirection: "row" }}>
          //       <Text style={txtColor}>Color {item.color}</Text>
          //       <View
          //         style={{
          //           height: 15,
          //           width: 15,
          //           backgroundColor: item.color.toLowerCase(),
          //           borderRadius: 15,
          //           marginLeft: 10
          //         }}
          //       />
          //     </View>
          //     <TouchableOpacity style={showDetailContainer}>
          //       <Text style={txtShowDetail}>SHOW DETAILS</Text>
          //     </TouchableOpacity>
          //   </View>
          // </View>;
          // }}
          keyExtractor={item => item.id}
        />
      </View>
      // <FlatList
      //   contentContainerStyle={wrapper}
      //   data={[{ key: "a" }, { key: "b" }]}
      //   renderItem={({ item }) => <Text>{item.key}</Text>}
      // />
    );
  }
}

{
  /* <ScrollView style={wrapper}>
  <View style={product}>
    <Image source={sp1} style={productImage} />
    <View style={mainRight}>
      <Text style={txtName}>{toTitleCase("black dress")}</Text>
      <Text style={txtPrice}>100$</Text>
      <Text style={txtMaterial}>Material Fur</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={txtColor}>Color white</Text>
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: "white",
            borderRadius: 15,
            marginLeft: 10
          }}
        />
      </View>
      <TouchableOpacity style={showDetailContainer}>
        <Text style={txtShowDetail}>SHOW DETAILS</Text>
      </TouchableOpacity>
    </View>
  </View>
</ScrollView>; */
}

const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#DFDFDF",
    flex: 1
  },
  productStyle: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: "center"
  },
  mainRight: {
    flex: 3,
    justifyContent: "space-between"
  },
  productController: {
    flexDirection: "row"
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  txtName: {
    paddingLeft: 20,
    color: "#A7A7A7",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtPrice: {
    paddingLeft: 20,
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtColor: {
    paddingLeft: 20,
    color: "black",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtMaterial: {
    paddingLeft: 20,
    color: "black",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtShowDetail: {
    color: "#C21C70",
    fontSize: 10,
    fontWeight: "400",
    fontFamily: "Avenir",
    textAlign: "right"
  },
  showDetailContainer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: 100
  }
});

export default SearchView;
