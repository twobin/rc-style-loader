'use strict';

var path = require('path');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: {
    demo1: __dirname + '/demo1/app.js',
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname,
    filename: '[name]/build.js',
  },
  webpackServer: {
    hot: true,
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass', path.resolve(__dirname, '../') + '?cardId=card-1001'],
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          __dirname,
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'rc-style-loader': path.resolve(__dirname, '../')
    },
  },
};
