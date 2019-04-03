const register = (email, password) =>
  fetch("http://10.102.1.236/api_MyShop/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ email, password })
  }).then((res => res.json()));

module.exports = register;
