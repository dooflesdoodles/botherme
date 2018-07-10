/**
 *  Helpers
 */

const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.development.config.js');


module.exports = {
  staticFile: filePath => path.join(__dirname, '..', 'client', 'static', filePath || ''),
  loadWebpackDevMiddleware: (app) => {
    console.log('Setting up webpack development middleware');

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }));
  },
};
