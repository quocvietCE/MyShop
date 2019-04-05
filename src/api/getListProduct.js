const getListProduct = (idType, page) => {
  let url;
  if (idType !== "COLLECTION") {
    url = `http://10.102.1.236/api_MyShop/product_by_type.php?id_type=${idType}&page=${page}`;
  } else {
    url = `http://10.102.1.236/api_MyShop/get_collection.php?page=${page}`;
  }

  return fetch(url).then(res => res.json());
};

export default getListProduct;
