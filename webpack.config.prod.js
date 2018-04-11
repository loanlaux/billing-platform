'use strict';

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const SaveAssetsJson = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',

  devtool: '#source-map',

  // Capture timing information for each module
  profile: false,

  // Report the first error as a hard error instead of tolerating it
  bail: true,

  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'assets/main.jsx'),
  ],

  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    pathinfo: true,
    publicPath: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.[hash].min.js',
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'web_modules'),
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'assets'),
      path.resolve(__dirname, 'assets/components'),
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
  },

  resolveLoader: {
  },

  plugins: [
    new CleanWebpackPlugin(['public/dist'], {
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    // new UglifyJsPlugin(),
    new SaveAssetsJson({
      path: process.cwd(),
      filename: 'assets.json',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
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
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        include: path.join(__dirname, 'assets'),
      },
    ],

    noParse: /\.min\.js/,
  },
};
