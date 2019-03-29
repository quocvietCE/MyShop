const initData = () => (
    fetch('http://10.102.1.236/api_MyShop/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
