const initData = () => (
    // fetch('http://192.168.56.1/api_MyShop/')// eslint-disable-line
    fetch('http://10.102.1.236/api_MyShop/')
    .then(res => res.json())
);

export default initData;
