import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ListView,
  RefreshControl
} from "react-native";
import backListIcon from "..//../../../media/appIcon/backList.png";
import sp1 from "..//../../../media/temp/sp1.jpeg";
import getListProduct from "../../../../api/getListProduct";

const url = "http://10.102.1.236/api_MyShop/images/product/";
// const url = "http://192.168.56.1/api_MyShop/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      listProducts: ds,
      refreshing: false,
      page: 1
    };
    this.arr = [];
  }

  componentDidMount() {
    const idType = this.props.navigation.state.params.category.id;
    getListProduct(idType, 1)
      .then(arrProduct => {
        console.log("======ListProduct======");
        console.log(arrProduct);
        console.log("============");
        this.arr = arrProduct;
        this.setState({
          listProducts: this.state.listProducts.cloneWithRows(this.arr)
        });
       
      })
      .catch(err => console.log(err));
  }

  goToDetail(product) {
    const { navigation } = this.props;
    navigation.navigate("PRODUCT_DETAIL", { product });
  }

  render() {
    const {
      container,
      header,
      wrapper,
      backStyle,
      titleStyle,
      productContainer,
      productInfo,
      productImage,
      lastRowInfo,
      txtName,
      txtPrice,
      txtMaterial,
      txtColor,
      txtShowDetail
    } = styles;

    const { category } = this.props.navigation.state.params;

    return (
      <View style={container}>
        <View style={wrapper}>
          <View style={header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={backListIcon} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>{toTitleCase(category.name)}</Text>
            <View style={{ width: 30 }} />
          </View>
          <ListView
            removeClippedSubviews={false}
            dataSource={this.state.listProducts}
            renderRow={product => (
              <View style={productContainer}>
                <Image
                  style={productImage}
                  source={{ uri: `${url}${product.images[0]}` }}
                />
                <View style={productInfo}>
                  <Text style={txtName}>{toTitleCase(product.name)}</Text>
                  <Text style={txtPrice}>{product.price}$</Text>
                  <Text style={txtMaterial}>Material {product.material}</Text>
                  <View style={lastRowInfo}>
                    <Text style={txtColor}>{product.color}</Text>
                    <View
                      style={{
                        backgroundColor: product.color.toLowerCase(),
                        height: 16,
                        width: 16,
                        borderRadius: 8
                      }}
                    />
                    <TouchableOpacity onPress={() => this.goToDetail(product)}>
                      <Text style={txtShowDetail}>SHOW DETAILS</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true });
                  // setTimeout(() => this.setState({ refreshing: false }), 3000);
                  const newPage = this.state.page + 1;
                  const idType = category.id;
                  getListProduct(idType, newPage).then(arrProduct => {
                    this.arr = arrProduct.concat(this.arr)
                    this.setState({
                      listProducts: this.state.listProducts.cloneWithRows(
                        // arrProduct
                        this.arr
                      ),
                      refreshing: false
                    });
                  });
                }}
              />
            }
          />
        </View>
      </View>
    );
  }
}

/* 

<ScrollView style={wrapper}>
          <View style={header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={backListIcon} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>{category.name}</Text>
            <View style={{ width: 30 }} />
          </View>

          <View style={productContainer}>
            <Image style={productImage} source={sp1} />
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyaBlue</Text>
                <View
                  style={{
                    backgroundColor: "cyan",
                    height: 16,
                    width: 16,
                    borderRadius: 8
                  }}
                />
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
    padding: 5
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center"
  },
  wrapper: {
    backgroundColor: "#FFFF",
    margin: 10,
    paddingHorizontal: 10
  },
  backStyle: {
    width: 30,
    height: 30
  },
  titleStyle: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 20
  },
  productContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#FFFF",
    borderLeftColor: "#FFFF",
    borderRightColor: "#FFFF",
    borderWidth: 1
    // justifyContent:'space-between'
  },
  productInfo: {
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361
  },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center"
  },
  txtShowDetail: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 10
  },
  txtColor: {
    fontFamily: "Avenir"
  },
  txtMaterial: {
    fontFamily: "Avenir"
  },
  txtPrice: {
    fontFamily: "Avenir",
    color: "#B10D65"
  },
  txtName: {
    fontFamily: "Avenir",
    color: "#BCBCBC",
    fontSize: 20,
    fontWeight: "400"
  }
});

{
  /* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PRODUCT_DETAIL")}
        >
          <Text>Go To Detail</Text>
        </TouchableOpacity> */
}
