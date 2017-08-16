const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/js/app.js',
    'vendors': './src/js/vendors.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 9001
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'ES6-AngularJS-Webpack',
      template: 'src/views/index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }],
    }]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  }
};