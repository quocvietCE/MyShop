import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ListView
} from "react-native";

import sp1 from "../../../../media/temp/sp1.jpeg";
import sp2 from "../../../../media/temp/sp2.jpeg";
import sp3 from "../../../../media/temp/sp3.jpeg";
import sp4 from "../../../../media/temp/sp4.jpeg";
const url = "http://10.102.1.236/api_MyShop/images/product/";

const { width, height } = Dimensions.get("window");

export default class TopProduct extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //   const { topProducts } = this.props;
  //   this.state = {
  //     dataSource: ds.cloneWithRows(topProducts)
  //   };
  // }

  // goToDetail(product) {
  //   const { navigation } = this.props;
  //   navigation.navigate("PRODUCT_DETAIL", product);
  // }

  goToDetail(product) {
    const { navigation } = this.props;
    navigation.navigate("PRODUCT_DETAIL", {
      // itemId: 86,
      // otherParam: 'anything you want here',
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.color,
      material: product.material,
      description: product.description,
      images: product.images
    });
  }

  render() {
    const {
      container,
      body,
      title,
      titleContainer,
      productContainer,
      productImage,
      productName,
      productPrice
    } = styles;

    const { topProducts } = this.props;

    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>Top Product</Text>
        </View>
        {/* <ListView
          // style={body} ListView ko dùng style
          contentContainerStyle={body}
          dataSource={this.state.dataSource}
          renderRow={product => (
            <TouchableOpacity
              style={productContainer}
              onPress={this.goToDetail.bind(this)}
            >
              <Image source={sp1} style={productImage} />
              <Text style={productName}>Product Name</Text>
              <Text style={productPrice}>Product Price</Text>
            </TouchableOpacity>
          )}
        /> */}
        {/* <View style={body}>
          {this.props.topProducts.map(e => (
            <TouchableOpacity
              style={productContainer}
              onPress={() => this.goToDetail(e)}
              key={e.id}
            >
              <Image
                source={{
                  uri: `${url}${e.images[0]}`
                  // uri: url + e.images[0]
                }}
                style={productImage}
              />
              <Text style={productName}>{e.name.toUpperCase()}</Text>
              <Text style={productPrice}>{e.price}$</Text>
            </TouchableOpacity>
          ))}
        </View> */}
        <ListView
          contentContainerStyle={body}
          enableEmptySections
          dataSource={new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows(topProducts)}
          renderRow={product => (
            <TouchableOpacity
              style={productContainer}
              onPress={() => this.goToDetail(product)}
              key={product.id}
            >
              <Image
                source={{
                  uri: `${url}${product.images[0]}`
                  // uri: url + e.images[0]
                }}
                style={productImage}
              />
              <Text style={productName}>{product.name.toUpperCase()}</Text>
              <Text style={productPrice}>{product.price}$</Text>
            </TouchableOpacity>
          )}
          renderSeparator={(sectionId, rowId) => {
            if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
          }}
        />
      </View>
    );
  }
}

const productWith = (width - 60) / 2;
const productImageHeight = (productWith / 361) * 453;

const styles = StyleSheet.create({
  container: {
    // height: height * 0.32,
    backgroundColor: "#ffff",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
    // padding: 10,
    // paddingTop: 0
  },
  titleContainer: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 10
    // shadowColor: "#2E272B",
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.2
  },
  title: {
    fontSize: 20,
    fontFamily: "Avenir",
    color: "#D3D3CF"
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingBottom: 20
  },

  productContainer: {
    width: productWith,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
    // margin: 10
  },
  productImage: {
    width: productWith,
    height: productImageHeight
  },
  productName: {
    paddingLeft: 10,
    color: "#D3D3CF",
    fontWeight: "500",
    fontFamily: "Avenir",
    marginVertical: 5
  },
  productPrice: {
    paddingLeft: 10,
    fontFamily: "Avenir",
    color: "#662F90",
    marginBottom: 5
  }
});

// <TouchableOpacity
//   style={productContainer}
//   onPress={this.goToDetail.bind(this)}
// >
//   <Image source={sp1} style={productImage} />
//   <Text style={productName}>Product Name</Text>
//   <Text style={productPrice}>Product Price</Text>
// </TouchableOpacity>

// <TouchableOpacity
//   style={productContainer}
//   onPress={this.goToDetail.bind(this)}
// >
//   <Image source={sp2} style={productImage} />
//   <Text style={productName}>Product Name</Text>
//   <Text style={productPrice}>Product Price</Text>
// </TouchableOpacity>
// <View style={{ height: 10, width }} />
// <TouchableOpacity
//   style={productContainer}
//   onPress={this.goToDetail.bind(this)}
// >
//   <Image source={sp3} style={productImage} />
//   <Text style={productName}>Product Name</Text>
//   <Text style={productPrice}>Product Price</Text>
// </TouchableOpacity>

// <TouchableOpacity
//   style={productContainer}
//   onPress={this.goToDetail.bind(this)}
// >
//   <Image source={sp4} style={productImage} />
//   <Text style={productName}>Product Name</Text>
//   <Text style={productPrice}>Product Price</Text>
// </TouchableOpacity>
