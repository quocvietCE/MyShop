import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import icLogo from "../../../media/appIcon/ic_logo.png";
import icMenu from "../../../media/appIcon/ic_menu.png";
import global from "../../global";
import search from "../../../api/searchProduct";

const { height } = Dimensions.get("window");

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: ""
    };
  }

  onSearch() {
    const { textSearch } = this.state;
    search(textSearch)
      .then(arrProduct => {
        console.log("======Header search product======");
        console.log(arrProduct);
        console.log("============");
        global.setArraySearch(arrProduct);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { wrapper, row1, textInputStyle, iconStyle, titleStyle } = styles;

    return (
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        <TextInput
          style={textInputStyle}
          placeholder="What do you want to buy?"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ textSearch: text })}
          onFocus={() => global.gotoSearch()}
          onSubmitEditing={this.onSearch.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: "#34B089",
    padding: 10,
    justifyContent: "space-around"
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInputStyle: {
    height: height / 20,
    backgroundColor: "#FFF",
    paddingLeft: 10
  },
  iconStyle: { width: 25, height: 25 },
  titleStyle: {
    color: "#FFF",
    fontFamily: "Avenir",
    fontSize: 20
  }
});
