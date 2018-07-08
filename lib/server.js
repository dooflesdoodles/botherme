const express = require('express');


class BotherMeServer {

  constructor() {
    this.cfg = { port: 3000 };
    this.app = express();
    // TODO: read config
    this.setupDB();
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupDB() {
    // TODO: database setup
  }

  setupMiddleware() {
    // TODO: errorcatching, session, headers
  }

  setupRoutes() {
    this.app.get(['/', '/index'], function(req, res) {
      res.send('Hello world');
    });
  }

  run() {
    this.app.listen(this.cfg.port)
  }

  shutdown() {
    // TODO
  }

}

module.exports = BotherMeServer
