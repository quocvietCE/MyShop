import { AsyncStorage } from "react-native";

const getCart = async () => {
  try {
    const value = await AsyncStorage.getItem("@cart");
    if (value !== null) {
      // console.log("======getCart()======");
      // console.log(value);
      // console.log("============");
      return JSON.parse(value);
    }
    return [];
  } catch (error) {
    // Error retrieving data
    return [];
  }
  //   const cartArray = AsyncStorage.getItem("@cart");
  //   console.log("======getCart()======");
  //   console.log(cartArray);
  //   console.log("============");
  //   return cartArray ? [] : cartArray;
};

export default getCart;
