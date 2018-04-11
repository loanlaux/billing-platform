'use strict';

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: 'development',

  target: 'web',

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    hot: true,
  },

  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'assets/main.jsx'),
  ],

  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: 'bundle.js',
    pathinfo: true,
    publicPath: 'http://localhost:8080/dist/',
  },

  resolve: {
    modules: [
      'web_modules',
      'node_modules',
      path.resolve(__dirname, 'assets'),
      path.resolve(__dirname, 'assets/components'),
      path.resolve(__dirname, 'assets/styles'),
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __ENV__: NODE_ENV,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/, // sass files
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
      },
      {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/, // fonts files
        loader: 'file-loader?name=[path][name].[ext]',
      },
      {
        test: /\.jsx?$/, // react files
        exclude: /node_modules/,
        include: path.join(__dirname, 'assets'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [require('babel-plugin-react-html-attrs'), require('@babel/plugin-transform-runtime')]
          }
        }
      },
    ],

    noParse: /\.min\.js/,
  },
};
