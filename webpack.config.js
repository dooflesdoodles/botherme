const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/main.js',
  output: {
    path: path.resolve(__dirname, 'client/static/dist'),
    filename: 'bundle.js'
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
  plugins: [
    // new CleanWebpackPlugin(['dist']), //cleans the dist folder
  ]
};
