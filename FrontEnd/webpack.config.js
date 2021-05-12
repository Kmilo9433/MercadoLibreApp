const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const JAVASCRIPT_RULES = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
      ],
    },
  },
};

const SASS_RULES = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const FILES_RULES = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: "file-loader",
  options: {
    outputPath: "images",
  },
};

const HTML_PLUGIN_SETTINGS = {
  template: "src/index.html",
  favicon: "src/assets/images/favicon.ico",
};

module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [JAVASCRIPT_RULES, SASS_RULES, FILES_RULES],
  },
  plugins: [new HTMLWebpackPlugin(HTML_PLUGIN_SETTINGS)],
  devServer: {
    historyApiFallback: true,
    port: 8081,
    host: "0.0.0.0",
  },
};
