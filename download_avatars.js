var request = require('request');
var secrets = require('./secrets')

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, callback) {
    var options = {
        url : "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",

        headers : { 
            'User-Agent' : 'request',
            'Authorization' : 'token ' + secrets.GITHUB_TOKEN
        }
        
    }

    request(options, function(err, res, body){
        callback(err, JSON.parse(body));
    });

};

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    // console.log("Result:", result);
    result.forEach(function(user){
        console.log(user.avatar_url)
    });
  });
