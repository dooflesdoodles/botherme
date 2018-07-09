/**
 *  Helpers
 */

const path = require('path');
const fs = require('fs');

module.exports = {
  staticFile: filePath => {
    return path.join(__dirname, '..', 'client', 'static', filePath || '');
  },
}
