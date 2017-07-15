var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: './app/index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
      rules: [
        
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
            options: {
              presets: ['env', 'react']
            }
          }]
  },
    plugins: [new HtmlWebpackPlugin({template: 'app/index.html'})]
};


module.exports = config;

