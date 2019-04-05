const getOrderHistory = (token) =>
  fetch("http://10.102.1.236/api_MyShop/order_history.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ token })
  }).then(res => res.json());

module.exports = getOrderHistory;
