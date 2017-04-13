const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader'
      },
      { test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My BlogApp',
      filename: 'index.html',
      template: 'index.template.ejs',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: __dirname + '/dist'
  }
};