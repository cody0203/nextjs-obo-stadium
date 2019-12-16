import { productTypes } from './product.types';

export const fetchProductsWithFilterStart = (
  page,
  limit,
  sort,
  order,
  query
) => ({
  type: productTypes.FETCH_PRODUCTS_WITH_FILTER_START,
  payload: { page, limit, sort, order, query }
});

export const fetchProductsWithFilterSuccess = products => ({
  type: productTypes.FETCH_PRODUCTS_WITH_FILTER_SUCCESS,
  payload: products
});

export const fetchProductsWithFilterFailure = error => ({
  type: productTypes.FETCH_PRODUCTS_WITH_FILTER_FAILURE,
  payload: error
});

export const fetchProductsStart = () => {
  return { type: productTypes.FETCH_PRODUCTS_START };
};

export const fetchProductsSuccess = products => ({
  type: productTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = error => ({
  type: productTypes.FETCH_PRODUCTS_FAILURE,
  payload: error
});
