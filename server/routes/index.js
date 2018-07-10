/**
 *  Main router
 */

const express = require('express');

const util = require('../util.js');


const router = express.Router();

/* GET home page. */
router.get(['/', '/index'], (req, res) => {
  res.sendFile(util.staticFile('html/index.html'));
});

module.exports = router;
