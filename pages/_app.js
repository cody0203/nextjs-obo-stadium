import React, { useEffect, useState } from "react";
import App from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import { IntlProvider } from "react-intl";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);

  //   return { ...appProps };
  // }

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

export default MyApp;
