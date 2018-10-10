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
var prom = require('./promisification');
var readFileAsync = Promise.promisify(fs.readFile);
var writeFileAsync = Promise.promisify(fs.writeFile);

/*
var someVal = 0;

Promise.resolve(someVal)
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
  // read '/blah/blah/github.txt'
  // take first line
  // GET request to github (request, response)
  // from json response --> writeFilePath '/blah/blah/response.txt'
  return readFileAsync(readFilePath)
    .then((fileData) => {
      var firstLine = fileData.toString().split('\n').shift();
      //console.log('AAAAAAAAAAA:', firstLine);
      return prom.getGitHubProfileAsync(firstLine);
    })
    .then((body) => {
      //console.log('CCCCCCCCCCCCCCCCCCC');
      //console.log(body);
      return writeFileAsync(writeFilePath, JSON.stringify(body));
    })
    .catch((err) => (err));
  
  
  // fs.readFile(readFilePath, (err, fileData) => {
    
  // }); 

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
