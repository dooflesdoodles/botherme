const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: {
    app: './client/main.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'client/static/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|server)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react', 'transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
};
