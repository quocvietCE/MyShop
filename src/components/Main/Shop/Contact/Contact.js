import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import map from "../../../../media/appIcon/map.png";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import phoneIcon from "../../../../media/appIcon/phone.png";
import mailIcon from "../../../../media/appIcon/mail.png";
import messageIcon from "../../../../media/appIcon/message.png";
import locationIcon from "../../../../media/appIcon/location.png";

class Contact extends Component {
  render() {
    const {
      mapContainer,
      wrapper,
      infoContainer,
      rowInfoContainer,
      imageStyle,
      infoText,
      mapStyle
    } = styles;
    return (
      <View style={wrapper}>
        <View style={mapContainer}>
          {/* <Image
            style={{ flex: 1, alignSelf: "stretch", width: undefined }}
            source={map}
          /> */}
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={mapStyle}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title={"Khoa Pham"}
              description={"My Shop"}
            />
          </MapView>
        </View>
        <View style={infoContainer}>
          <View style={rowInfoContainer}>
            <Image source={locationIcon} style={imageStyle} />
            <Text style={infoText}>90 Le Thi Rieng/ Ben Thanh Dist</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image source={phoneIcon} style={imageStyle} />
            <Text style={infoText}>(+84) 01694472176</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image source={mailIcon} style={imageStyle} />
            <Text style={infoText}>khoaphamtraining@gmail.com</Text>
          </View>
          <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
            <Image source={messageIcon} style={imageStyle} />
            <Text style={infoText}>(+84) 09877067707</Text>
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#F6F6F6" },
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: "#FFF",
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D6D6D6"
  },
  imageStyle: {
    width: 30,
    height: 30
  },
  infoText: {
    fontFamily: "Avenir",
    color: "#AE005E",
    fontWeight: "500"
  }
});

export default Contact;
