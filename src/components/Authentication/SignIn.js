import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import signIn from "../../api/signIn";
import global from "../global";
import getToken from "../../api/getToken";
import saveToken from "../../api/saveToken";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  // componentDidMount() {
  //   getToken().then(a => {
  //     console.log("======SignIn GetToken======");
  //     console.log(a);
  //     console.log("============");
  //   });
  // }

  onSingIn() {
    const { email, password } = this.state;
    signIn(email, password)
      .then(res => {
        console.log("======SignIn======");
        console.log(res);
        console.log("============");
        global.onSignIn(res.user);
        this.props.goBackToMain();
        saveToken(res.token);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { textInputStyle, buttonText, signInNowStyle } = styles;
    return (
      <View>
        <TextInput
          style={textInputStyle}
          placeholder="Enter your email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={textInputStyle}
          placeholder="Enter your Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableOpacity
          style={signInNowStyle}
          onPress={this.onSingIn.bind(this)}
        >
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
