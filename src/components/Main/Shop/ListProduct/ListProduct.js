import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import backListIcon from "..//../../../media/appIcon/backList.png";
import sp1 from "..//../../../media/temp/sp1.jpeg";
export default class ListProduct extends Component {
  render() {
    const {
      container,
      header,
      wrapper,
      backStyle,
      titleStyle,
      productContainer,
      productInfo,
      productImage,
      lastRowInfo,
      txtName,
      txtPrice,
      txtMaterial,
      txtColor,
      txtShowDetail
    } = styles;

    return (
      <View style={container}>
        <ScrollView style={wrapper}>
          <View style={header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={backListIcon} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>Party Dress</Text>
            <View style={{ width: 30 }} />
          </View>
          <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyaBlue</Text>
                <View
                  style={{
                    backgroundColor: "cyan",
                    height: 16,
                    width: 16,
                    borderRadius: 8
                  }}
                />
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyaBlue</Text>
                <View
                  style={{
                    backgroundColor: "cyan",
                    height: 16,
                    width: 16,
                    borderRadius: 8
                  }}
                />
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyaBlue</Text>
                <View
                  style={{
                    backgroundColor: "cyan",
                    height: 16,
                    width: 16,
                    borderRadius: 8
                  }}
                />
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyaBlue</Text>
                <View
                  style={{
                    backgroundColor: "cyan",
                    height: 16,
                    width: 16,
                    borderRadius: 8
                  }}
                />
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyaBlue</Text>
                <View
                  style={{
                    backgroundColor: "cyan",
                    height: 16,
                    width: 16,
                    borderRadius: 8
                  }}
                />
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyaBlue</Text>
                <View
                  style={{
                    backgroundColor: "cyan",
                    height: 16,
                    width: 16,
                    borderRadius: 8
                  }}
                />
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
    padding: 5
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center"
  },
  wrapper: {
    backgroundColor: "#FFFF",
    margin: 10,
    paddingHorizontal: 10
  },
  backStyle: {
    width: 30,
    height: 30
  },
  titleStyle: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 20
  },
  productContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#FFFF",
    borderLeftColor: "#FFFF",
    borderRightColor: "#FFFF",
    borderWidth: 1
    // justifyContent:'space-between'
  },
  productInfo: {
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361
  },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center"
  },
  txtShowDetail: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 10
  },
  txtColor: {
    fontFamily: "Avenir"
  },
  txtMaterial: {
    fontFamily: "Avenir"
  },
  txtPrice: {
    fontFamily: "Avenir",
    color: "#B10D65"
  },
  txtName: {
    fontFamily: "Avenir",
    color: "#BCBCBC",
    fontSize: 20,
    fontWeight: "400"
  }
});

{
  /* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PRODUCT_DETAIL")}
        >
          <Text>Go To Detail</Text>
        </TouchableOpacity> */
}
