import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  ListView
} from "react-native";
import global from "../../../global";
// import getCart from "../../../../api/getCart";
import getToken from "../../../../api/getToken";
import sendOrder from "../../../../api/sendOrder";

// import sp1 from "../../.././../media/temp/sp1.jpeg";
// import sp1 from "../../../../media/temp/sp1.jpeg";

const url = "http://10.102.1.236/api_MyShop/images/product/";
// const url = "http://192.168.56.1/api_MyShop/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

class CartView extends Component {
  incrQuantity(id) {
    global.incrQuantity(id);
  }

  decrQuantity(id) {
    global.decrQuantity(id);
  }

  removeProduct(id) {
    global.removeProduct(id);
  }

  // addProductToCart(product) {
  //   this.setState({ cartArray: this.state.cartArray.concat(product) });
  // }

  gotoDetail(product) {
    const { navigation } = this.props;
    navigation.navigate("PRODUCT_DETAIL_CART", { product });
    // console.log("======CartView gotoDetail======");
    // console.log(product);
    // console.log("============");
    // Actions.PRODUCT_DETAIL();
  }

  // componentDidMount() {
  //   getCart().then(cartArray => this.setState({ cartArray }));
  // }

  async onSendOrder() {
    try {
      const token = await getToken();
      const arrayDetail = this.props.screenProps.cartArray.map(e => ({
        id: e.product.id,
        quantity: e.quantity
      }));

      console.log("======CartView Token ArrayDetail======");
      console.log(token, arrayDetail);
      console.log("============");
      const kq = await sendOrder(token, arrayDetail);
      if (kq === "THEM_THANH_CONG") {
        console.log("THEM THANH CONG");
      } else {
        console.log("THEM THAT BAI", kq);
      }
    } catch (e) {}
  }

  render() {
    const { cartArray } = this.props.screenProps;
    const {
      main,
      checkoutButton,
      checkoutTitle,
      wrapper,
      productStyle,
      mainRight,
      productController,
      txtName,
      txtPrice,
      productImage,
      numberOfProduct,
      txtShowDetail,
      showDetailContainer
    } = styles;

    const arrTotal = cartArray.map(e => e.product.price * e.quantity);
    // console.log("======CartView arrTotal======");
    // console.log(arrTotal);
    // console.log("============");
    const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
    // console.log("======CartView Total======");
    // console.log(total);
    // console.log("============");
    return (
      <View style={wrapper}>
        <ListView
          contentContainerStyle={main}
          enableEmptySections
          dataSource={new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows(cartArray)}
          renderRow={cartItem => (
            <View style={productStyle}>
              <Image
                source={{ uri: `${url}${cartItem.product.images[0]}` }}
                style={productImage}
              />
              <View style={[mainRight]}>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={txtName}>
                    {toTitleCase(cartItem.product.name)}
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.removeProduct(cartItem.product.id)}
                  >
                    <Text style={{ fontFamily: "Avenir", color: "#969696" }}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{cartItem.product.price}$</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity
                      onPress={() => this.incrQuantity(cartItem.product.id)}
                    >
                      <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{cartItem.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => this.decrQuantity(cartItem.product.id)}
                    >
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={showDetailContainer}
                    onPress={() => this.gotoDetail(cartItem.product)}
                  >
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={checkoutButton}
          onPress={this.onSendOrder.bind(this)}
        >
          <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#DFDFDF"
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: "#2ABB9C",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    width,
    backgroundColor: "#DFDFDF"
  },
  checkoutTitle: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Avenir"
  },
  productStyle: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: "center"
  },
  mainRight: {
    flex: 3,
    justifyContent: "space-between"
  },
  productController: {
    flexDirection: "row"
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  txtName: {
    paddingLeft: 20,
    color: "#A7A7A7",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtPrice: {
    paddingLeft: 20,
    color: "#C21C70",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtShowDetail: {
    color: "#C21C70",
    fontSize: 10,
    fontWeight: "400",
    fontFamily: "Avenir",
    textAlign: "right"
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default CartView;

{
  /* <ScrollView style={main}>
 <View style={product} /> 
  {cartArray.map(product => (
    <View style={productStyle}>
      <Image source={sp1} style={productImage} />
      <View style={[mainRight]}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Text style={txtName}>{toTitleCase("black of the")}</Text>
          <TouchableOpacity>
            <Text style={{ fontFamily: "Avenir", color: "#969696" }}>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={txtPrice}>{100}$</Text>
        </View>
        <View style={productController}>
          <View style={numberOfProduct}>
            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
            <Text>{3}</Text>
            <TouchableOpacity>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={showDetailContainer}>
            <Text style={txtShowDetail}>SHOW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ))}
</ScrollView> 

*/
}
