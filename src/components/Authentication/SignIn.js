import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from "react-native";

class SignIn extends Component {
  render() {
    const { textInputStyle, buttonText, signInNowStyle } = styles;
    return (
      <View>
        <TextInput style={textInputStyle} placeholder="Enter your email" />
        <TextInput style={textInputStyle} placeholder="Enter your Password" />
        <TouchableOpacity style={signInNowStyle}>
          <Text style={buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SignIn;

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "Avenir",
    color: "#fff",
    fontWeight: "400"
  },
  textInputStyle: {
    height: 50,
    backgroundColor: "#FFF",
    paddingLeft: 30,
    marginBottom: 10,
    borderRadius: 20
  },
  signInNowStyle: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
