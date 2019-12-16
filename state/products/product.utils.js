import axios from 'axios';

export const fetchProductsWithFilter = async ({
  page,
  limit,
  sort,
  order,
  query
}) => {
  let filters = '';
  for (let i in query) {
    if (i !== 'sort' && i !== 'order') {
      filters += `&${i}=${query[i]}`;
    }
  }
  const API = `https://cody-json-server.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}${filters}`;

  const response = await axios.get(API);
  const { data, headers } = await response.json();

  return { products: data, headers };
};

export const fetchProducts = async () => {
  const response = await axios.get(
    'https://cody-json-server.herokuapp.com/products'
  );

  const data = response.data;

  return { products: data };
};
