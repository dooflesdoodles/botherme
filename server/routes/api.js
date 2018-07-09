/**
 *  API router (for AJAX calls)
 */

const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.json({ data: 'sample data' });
});

module.exports = router;
