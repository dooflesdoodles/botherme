const path = require('path');


const distDir = path.resolve(__dirname, 'client/static/dist');

module.exports = {
  mode: 'development',
  entry: './client/main.js',
  output: {
    path: distDir,
    filename: 'bundle.js',
    publicPath: '/static/dist',
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
              ['@babel/preset-env'],
            ],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
  ],
};
