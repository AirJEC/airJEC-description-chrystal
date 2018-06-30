/* eslint-disable */

const path = require('path');

module.exports = {
  entry: {main: './client/src/index.jsx'},
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'overview.js'
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
      ]
  },
};
