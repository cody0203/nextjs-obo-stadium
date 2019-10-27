/* eslint-disable */
const withCss = require("@zeit/next-css");
const path = require("path");

module.exports = withCss({
  cssLoaderOptions: {
    url: false
  }
});
