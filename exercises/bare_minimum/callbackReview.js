/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  //so we use fs.readFile to read the file from filePath
  fs.readFile(filePath, (err, text) => {
    if (err) {
      // callback(new Error('Cannot read file')) --> can't do this, need to use args
      callback(err);
    } else {
      console.log(text.toString());
      //need to use toString() to strip out buffer, split text by newline
      //shift removes the first element and returns it
      var plucked = text.toString().split('\n').shift();
      //callback to return plucked once everything else is done 
      callback(err, plucked);
    }
  });
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
