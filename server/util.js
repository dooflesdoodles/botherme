/**
 *  Helpers
 */

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.development.config.js');


module.exports = {
  loadWebpackDevMiddleware: (app) => {
    console.log('Setting up webpack development middleware');

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }));
  },
};
