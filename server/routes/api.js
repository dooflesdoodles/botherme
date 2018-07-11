/**
 *  API router (for AJAX calls)
 */

const express = require('express');


const router = express.Router();

/* GET users listing. */
router.get('/test', (req, res) => {
  res.json({ result: 'success' });
});

module.exports = router;
