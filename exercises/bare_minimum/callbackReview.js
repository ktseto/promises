/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (err, filePath) {
  if (err) {
    callback(new Error('Cannot read file'));
  } else {
    fs.readFile(filePath, (err, pluck) => {
      if (err) {
        callback(new Error('Cannot read file'));
      }
    });
  }
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (err, url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
