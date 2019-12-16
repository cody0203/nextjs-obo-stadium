import { call, put, takeLatest, all } from 'redux-saga/effects';
import { productTypes } from './product.types';

import { fetchProductsWithFilter, fetchProducts } from './product.utils';

import {
  fetchProductsWithFilterSuccess,
  fetchProductsWithFilterFailure,
  fetchProductsSuccess,
  fetchProductsFailure
} from './product.actions';

function* fetchProductsWithFilterAsync(queries) {
  try {
    const { headers, products } = yield call(fetchProductsWithFilter, queries);
    yield put(fetchProductsWithFilterSuccess(headers, products));
  } catch (error) {
    yield put(fetchProductsWithFilterFailure(error.message));
  }
}

function* fetchProductsAsync() {
  try {
    const { products } = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* onFetchProductsWithFilter() {
  yield takeLatest(
    productTypes.FETCH_PRODUCTS_WITH_FILTER_START,
    fetchProductsWithFilterAsync
  );
}

function* onFetchProducts() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProductsAsync);
}

export function* productSagas() {
  yield all([call(onFetchProductsWithFilter), call(onFetchProducts)]);
}
