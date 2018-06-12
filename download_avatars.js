var request = require('request');
var secret = require('./secrets')

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, callback) {
    var options = {
        url : "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",

        headers : { 
            'User-Agent' : 'request',
            'Authorization' : secrets.GITHUB_TOKEN
        }
        
    }

    request(url, function(err, res, body){
        callback(err, body);
    });

};

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });
  