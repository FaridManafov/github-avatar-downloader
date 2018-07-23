var request = require('request');
var secrets = require('./secrets')
require("dotenv").config();

var repositoryOwner = process.argv.slice(2)[0];
var repositoryName = process.argv.slice(2)[1];

console.log('Welcome to the GitHub Avatar Downloader!');

var options = {
    url : "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers : { 
        'User-Agent' : 'FaridManafov',
        'Authorization': process.env.GITHUB_TOKEN
    }
}

var getAvatars = function(options, save) {
  request.get(options, function(error, response, body) {
    if (error) {
      console.log('ERROR: ' + response.statusCode);
      throw err;
    } else {
      var rawData = JSON.parse(body);
      rawData.forEach(function(element) {
        saveAvatar(element.avatar_url, element.login);
      })
    }
  });
}

var saveAvatar = function (url, name) {
    request.get(url)
        .on('response', function () {
            process.stdout.write('Downloading avatar for user ' + name + ' to the avatars file \n');
        })
        .pipe(fs.createWriteStream('./avatars/' + name + '.png'))
};

process.argv.slice(2).length === 2
  ? getAvatars(options, saveAvatar)
  : console.log(
      "ERROR: Arguments must be in the form of 'repo_owner' 'repo_name'. Ex: node avatar_get.js facebook react"
    );