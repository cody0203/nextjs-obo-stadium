import React, { useEffect, useState } from "react";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import Overlay from "../components/overlay";
import { PageTransition } from "next-page-transitions";

// const Loading = () => {
//   const [loading, setLoading] = useState(null);

//   useEffect(
//     () => {
//       Router.events.on("routeChangeStart", url => {
//         console.log(`Loading: ${url}`);
//         setLoading(true);
//         NProgress.start();
//       });
//       return () => {
//         Router.events.on("routeChangeComplete", url => {
//           console.log(`Loaded: ${url}`);
//           setLoading(false);
//           NProgress.done();
//         });
//         Router.events.on("routeChangeError", () => NProgress.done());
//       };
//     },
//     [],
//     [loading]
//   );
//   let overlay;

//   if (loading === true) {
//     overlay = <Overlay />;
//   } else {
//     overlay = <div></div>;
//   }

//   return <div>{overlay}</div>;
// };

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
      <>
        <Component {...pageProps}></Component>
      </>
    );
  }
}

export default MyApp;
