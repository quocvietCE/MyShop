const searchProduct = (key) => {
    const url = `http://10.102.1.236/api_MyShop/search.php?key=${key}`;
    return fetch(url).then(res => res.json());
  };
  
  export default searchProduct;
  