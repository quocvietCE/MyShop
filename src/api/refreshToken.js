import saveToken from "./saveToken";
import getToken from "./getToken";

const getNewToken = token =>
  fetch("http://10.102.1.236/api_MyShop/refresh_token.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token })
  }).then(res => res.text());

const refreshToken = async () => {
  //   fetch("http://10.102.1.236/api_MyShop/refresh_token.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({ token })
  //   }).then((res => res.text()).then(tokenToSave => saveToken(tokenToSave)));
  try {
    const token = await getToken();
    if (token === "" || token === "TOKEN_KHONG_HOP_LE") {
      console.log("Chua co token");
    }
    const newToken = await getNewToken(token);
    await saveToken(newToken);
    console.log("Token moi: " + newToken);
  } catch (e) {
    console.log(e);
  }
};

export default refreshToken;
