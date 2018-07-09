/**
 *  Main router
 */

const express = require('express');
const router = express.Router();

const util = require('../util.js')

/* GET home page. */
router.get(['/', '/index'], function(req, res, next) {
  res.sendFile(util.staticFile('index.html'));
});

module.exports = router;
