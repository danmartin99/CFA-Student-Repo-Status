// Get the data of a particular user from GH
// Show parts of the data I want to see (num repos etc.)
// Get user to be prompted for user name

const axios = require('axios');

const prompt = require('prompt')

function getGithub(username){


axios.get(`https://api.github.com/users/${username}`)
  .then(function (response) {
    console.log('Full Name: ',response["data"]["name"]);
    console.log(response["data"]["location"]);
    console.log(response["data"]["public_repos"]);
    console.log(response["data"]["followers"]);

  })
  .catch(function (error) {
    console.log(error);
  });
  }

  prompt.start();

  prompt.get(['username'], function (err, result) {
  	console.log('You entered: ' + result.username);
  	getGithub(result.username);
  });