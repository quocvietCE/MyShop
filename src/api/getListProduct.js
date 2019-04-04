const getListProduct = (idType, page) => {
  const url = `http://10.102.1.236/api_MyShop/product_by_type.php?id_type=${idType}&page=${page}`;
  return fetch(url).then(res => res.json());
};

export default getListProduct;
