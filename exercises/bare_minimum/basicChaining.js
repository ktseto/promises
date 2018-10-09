/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

/*
var someVal = 0;

Prmise.resolve(someVal)
  .then((value) => {
    value === 0 //true
    return readFilePromise(someFilePath);
  })
  .then((fileContents) => {
    return {
      text:fileContents
    };
  })
  .then((object) => {

  })
  .error() // handles errors
  .catch() // handles errors and exceptions
  //can then do more .then() if you want
*/

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
