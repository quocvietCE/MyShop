const changeInfo = (token, name, phone, address) =>
  fetch("http://10.102.1.236/api_MyShop/change_info.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token, name, phone, address })
  }).then((res => res.json()));

module.exports = changeInfo;
