import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import profileIcon from "../../media/temp/profile.png";
import global from "../global";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLogedIn: false
      user: null
    };
    global.onSignIn = this.onSignIn.bind(this);
  }
  onSignIn(user) {
    // this.setState({ isLogedIn: true });
    this.setState({ user });
  }
  render() {
    const {
      container,
      profileImage,
      btnStyle,
      btnText,
      btnStyleSignIn,
      btnTextSignIn,
      loginContainer,
      username
    } = styles;

    const { user } = this.state;

    const logoutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={btnStyle}
          onPress={() => this.props.navigation.navigate("AUTHENTICATION")}
        >
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX = (
      <View style={loginContainer}>
        <Text style={username}>{user ? user.name : ""}</Text>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={btnStyleSignIn}
            onPress={() => this.props.navigation.navigate("ORDERHISTORY")}
          >
            <Text style={btnTextSignIn}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={btnStyleSignIn}
            onPress={() => this.props.navigation.navigate("CHANGE_INFO")}
          >
            <Text style={btnTextSignIn}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnStyleSignIn}>
            <Text style={btnTextSignIn}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    // const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
    const mainJSX = this.state.user ? loginJSX : logoutJSX;

    return (
      <View style={container}>
        {/* <Text>Menu Componets</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AUTHENTICATION")}
        >
          <Text>Go to Authentication</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CHANGE_INFO")}
        >
          <Text>Go to ChangeInfo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ORDERHISTORY")}
        >
          <Text>Go to Order History</Text>
        </TouchableOpacity> */}
        <Image source={profileIcon} style={profileImage} />
        {mainJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34B089",
    borderRightWidth: 3,
    borderColor: "#fff",
    alignItems: "center"
  },
  profileImage: {
    width: 120,
    height: 120,
    marginVertical: 30,
    borderRadius: 60
  },
  btnStyle: {
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 70,
    marginBottom: 10
  },
  btnText: {
    color: "#34B089",
    fontSize: 20
  },
  btnTextSignIn: {
    color: "#34B089",
    fontSize: 20
    // alignSelf:'stretch'
  },
  btnStyleSignIn: {
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    // alignItems:'center',
    width: 200,
    borderRadius: 5,
    // paddingLeft: 10,
    // paddingHorizontal:70,
    marginBottom: 10,
    paddingLeft: 10
  },
  loginContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  log: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Avenir"
  },
  username: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Avenir"
  }
});
