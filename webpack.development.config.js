const path = require('path');


const distDir = path.resolve(__dirname, 'client/static/dist');

module.exports = {
  mode: 'development',
  entry: {
    app: './client/main.jsx',
    // polyfill: 'babel-polyfill',
  },
  output: {
    path: distDir,
    filename: 'bundle.js',
    publicPath: '/static/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              ['@babel/react'],
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
