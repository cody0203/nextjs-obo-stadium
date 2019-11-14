/* eslint-disable */
const withCss = require("@zeit/next-css");
const path = require("path");

module.exports = withCss({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["/redux"] = path.join(__dirname, "/redux");

    return config;
  }
});
