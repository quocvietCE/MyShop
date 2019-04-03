import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import register from "../../api/register";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      rePassword: ""
    };
  }

  registerUser() {
    const { name, email, password } = this.state;
    register(email, name, password).then(res => {
      console.log("======SignUp======");
      console.log(res);
      console.log("============");
      if (res === "THANH_CONG") return this.onSuccess();
      this.onFail();
    });
  }

  onSuccess() {
    Alert.alert(
      "Notice",
      "Sign Up Successfully",
      [{ text: "OK", onPress: this.props.gotoSignIn() }],
      { cancelable: false }
    );
  }

  onFail() {
    Alert.alert(
      "Notice",
      "Email has been used by other",
      [
        {
          text: "OK",
          onPress: () => {
            this.setState({ email: "" });
          }
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    const { textInputStyle, buttonText, signInNowStyle } = styles;
    return (
      <View>
        <TextInput
          style={textInputStyle}
          placeholder="Enter your mane"
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Enter your email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Enter your Password"
          value={this.state.password}
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Re-Enter your Password"
          value={this.state.rePassword}
          secureTextEntry
          onChangeText={text => this.setState({ rePassword: text })}
        />
        <TouchableOpacity
          style={signInNowStyle}
          onPress={() => this.registerUser()}
        >
          <Text style={buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SignUp;

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
