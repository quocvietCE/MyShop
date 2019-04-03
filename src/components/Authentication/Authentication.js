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

import icLogo from "../../media/appIcon/ic_logo.png";
import icBack from "../../media/appIcon/back_white.png";
import register from "../../api/register";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const { height } = Dimensions.get("window");

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  gotoSignIn() {
    this.setState({ isSignIn: true });
  }

  //Debug test đăng ký lên server
  // componentDidMount() {
  //   console.log("-------------Authentication------------");
  //   register("testEmail", "testName", "testPassword").then(res =>
  //     console.log(res)
  //   );
  // }

  signIn() {
    this.setState({ isSignIn: true });
  }

  signUp() {
    this.setState({ isSignIn: false });
  }

  goBackToMain() {
    const { navigation } = this.props;
    navigation.goBack();
    // navigation.navigate("MENU");
  }

  render() {
    const {
      wrapper,
      row1,
      textInputStyle,
      iconStyle,
      titleStyle,
      controlStyle,
      signInStyle,
      signUpStyle,
      activeStyle,
      inactiveStyle,
      signInNowStyle,
      buttonText
    } = styles;

    // Chuyển đén file SignIn riêng
    // const signInJSX = <SignIn/> //(
    //   <View>
    //     <TextInput style={textInputStyle} placeholder="Enter your email" />
    //     <TextInput style={textInputStyle} placeholder="Enter your Password" />
    //     <TouchableOpacity style={signInNowStyle}>
    //       <Text style={buttonText}>SIGN IN NOW</Text>
    //     </TouchableOpacity>
    //   </View>
    // );

    // const signUpJSX = <SignUp/>
    // const signUpJSX = (
    //   <View>
    //     <TextInput style={textInputStyle} placeholder="Enter your mane" />
    //     <TextInput style={textInputStyle} placeholder="Enter your email" />
    //     <TextInput style={textInputStyle} placeholder="Enter your Password" />
    //     <TextInput
    //       style={textInputStyle}
    //       placeholder="Re-Enter your Password"
    //     />
    //     <TouchableOpacity style={signInNowStyle}>
    //       <Text style={buttonText}>SIGN UP NOW</Text>
    //     </TouchableOpacity>
    //   </View>
    // );
    const { isSignIn } = this.state;
    // const mainJSX = isSignIn ? signInJSX : signUpJSX;
    const mainJSX = isSignIn ? (
      <SignIn goBackToMain={this.goBackToMain.bind(this)} />
    ) : (
      <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />
    );

    return (
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={() => this.goBackToMain()}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        {mainJSX}
        <View style={controlStyle}>
          <TouchableOpacity
            style={signInStyle}
            onPress={this.signIn.bind(this)}
          >
            <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={signUpStyle}
            onPress={this.signUp.bind(this)}
          >
            <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // height: height / 8,
    backgroundColor: "#3EBA77",
    padding: 20,
    justifyContent: "space-between",
    flex: 1
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInputStyle: {
    height: 50,
    backgroundColor: "#FFF",
    paddingLeft: 30,
    marginBottom: 10,
    borderRadius: 20
  },
  iconStyle: {
    width: 30,
    height: 30
  },
  titleStyle: {
    color: "#FFF",
    fontFamily: "Avenir",
    fontSize: 20
  },
  controlStyle: {
    flexDirection: "row",
    width: 300,
    // alignItems: "center",
    // justifyContent:'center',
    // paddingHorizontal:50
    marginLeft: 35,
    alignSelf: "stretch"
  },
  signInStyle: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1
  },
  signUpStyle: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 1
  },
  activeStyle: {
    color: "#3EBA77"
  },
  inactiveStyle: {
    color: "#D7D7D7"
  },
  signInNowStyle: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontFamily: "Avenir",
    color: "#fff",
    fontWeight: "400"
  }
});
