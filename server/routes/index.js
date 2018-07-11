/**
 *  Main router
 */

const express = require('express');


const router = express.Router();

/* GET home page. */
router.get(['/', '/index'], (req, res) => {
  res.render('index', { title: 'botherme' });
});

module.exports = router;
