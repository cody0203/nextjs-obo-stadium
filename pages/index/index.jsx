import { connect } from 'react-redux';

// Redux
import { fetchProductsStart } from 'state/products/product.actions';

function mapStateToProps(state) {
  return {
    products: state.productReducer.products
  };
}

import Home from './index.presentation';

Home.getInitialProps = ({ store, isServer }) => {
  store.dispatch(fetchProductsStart());

  return { isServer };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
