/* eslint-disable */

const path = require('path');

module.exports = {
  entry: {main: './client/src/js/index.jsx'},
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  module:{
      rules:[
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          },
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader'],
          }
      ]
  },
};