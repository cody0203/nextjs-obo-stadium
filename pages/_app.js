import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store/index";
import { IntlProvider } from "react-intl";
import withRedux from "next-redux-wrapper";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default withRedux(store)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps } = this.props;
      return (
        <Provider store={store}>
          <IntlProvider locale="vi">
            <Component {...pageProps}></Component>
          </IntlProvider>
        </Provider>
      );
    }
  }
);
