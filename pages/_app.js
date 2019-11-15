import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store/index";
import { PersistGate } from "redux-persist/integration/react";
import { IntlProvider } from "react-intl";
import withRedux from "next-redux-wrapper";

import Loading from "../components/loading";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-credit-cards/es/styles-compiled.css";

export default withRedux(makeStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <IntlProvider locale="vi">
            <PersistGate persistor={store.__persistor} loading={<Loading />}>
              <Component {...pageProps} />
            </PersistGate>
          </IntlProvider>
        </Provider>
      );
    }
  }
);
