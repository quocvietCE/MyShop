import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import { Actions } from "react-native-router-flux";

const { width, height } = Dimensions.get("window");

// const url = "http://10.102.1.236/api_MyShop/images/type/";
const url = "http://192.168.56.1/api_MyShop/images/type/";

export default class Category extends React.Component {
  gotoListProduct() {
    const { navigation } = this.props;
    navigation.navigate("LIST_PRODUCT");
    // Actions.LIST_PRODUCT();
  }

  render() {
    const { types } = this.props;
    const { wrapper, textStyle, imageStyle, cateTitle } = styles;
    const swiper = (
      <Swiper showsPagination width={imageWidth} height={imageHeight}>
        {types.map(e => (
          <TouchableOpacity
            onPress={this.gotoListProduct.bind(this)}
            ekey={e.id}
          >
            <ImageBackground source={{ uri: url + e.image }} style={imageStyle}>
              <Text style={cateTitle}>{e.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </Swiper>
    );
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: "center", paddingTop: 5 }}>
          <Text style={textStyle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 4, justifyContent: "flex-end" }}>
          {types.length ? swiper : null}
        </View>
      </View>
    );
  }
}

const imageWidth = width - 60;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.32,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 20,
    color: "#AFAEAF"
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  cateTitle: {
    fontSize: 20,
    fontFamily: "Avenir",
    color: "#9A9A9A"
  }
});
