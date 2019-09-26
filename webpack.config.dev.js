const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');
const rules = require('./webpack.rules.js');

const styleLoader = {
  loader: 'style-loader'
};

rules[1].use.unshift(styleLoader);
rules[2].use.unshift(styleLoader);

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "example/index.html"),
  filename: "./index.html"
});

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: path.resolve(__dirname, './example/index.js'),

  target: 'web',

  module: {
    rules: rules
  },

  plugins: [htmlWebpackPlugin],

  devServer: {
    contentBase: path.resolve(__dirname, './example'),
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false
    }
  },

  watch: true

});
