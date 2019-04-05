import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import bannerImage from "../../../../media/temp/banner.jpg";

const { width, height } = Dimensions.get("window");

export default class Collection extends React.Component {
  goToListProduct() {
    this.props.navigation.navigate("LIST_PRODUCT", {
      category: { name: "SPRING COLLECTION", id: "COLLECTION" }
    });
  }

  render() {
    const { wrapper, textStyle, imageStyle, imageViewStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: "center", paddingTop: 5 }}>
          <Text style={textStyle}>SPRING COLLECTION</Text>
        </View>
        <TouchableOpacity
          style={imageViewStyle}
          onPress={this.goToListProduct.bind(this)}
        >
          <Image source={bannerImage} style={imageStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

const imageWidth = width - 60;
const imageHeight = (imageWidth / 933) * 465;

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
  imageViewStyle: {
    flex: 4,
    padding: 10,
    // justifyContent: "flex-end",
    justifyContent: "center"
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth
  }
});
