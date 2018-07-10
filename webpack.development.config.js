const path = require('path');
const webpack = require('webpack');


const distDir = path.resolve(__dirname, 'client/static/dist')

module.exports = {
  mode: 'development',
  entry: './client/main.js',
  output: {
    path: distDir,
    filename: 'bundle.js',
    publicPath: '/static/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|server)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,   //Tell dev-server which port to run
    open: true,   // to open the local server in browser
    contentBase: distDir //serve from 'dist' folder
  },
  plugins: [
  ]
};
