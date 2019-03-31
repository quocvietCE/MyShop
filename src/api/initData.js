const initData = () => (
    fetch('http://192.168.56.1/api_MyShop/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
