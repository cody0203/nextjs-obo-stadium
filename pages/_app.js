import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { makeStore } from 'state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { IntlProvider } from 'react-intl';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import Loading from '../components/loading';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <IntlProvider locale="vi">
          {/* <PersistGate persistor={store.__persistor} loading={<Loading />}> */}
          <Component {...pageProps} />
          {/* </PersistGate> */}
        </IntlProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));
