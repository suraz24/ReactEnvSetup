const webpack = require('webpack');
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
var DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: 'bundle.js',

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
      HtmlWebpackPluginConfig,
      HotModuleReplacementPlugin,
      new DashboardPlugin()
  ]
}
