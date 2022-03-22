const axios = require('axios');
const config = require('../config.js');
const Promise = require('bluebird');

var getReposByUsername = (userName, callback) => {
  let options = {
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    url: `https://api.github.com/users/${userName}/repos`,
  };

  axios(options)
    .then(repos => {
      callback(repos.data);
    })
    .catch(err => {
      console.log(err);
    });

};

module.exports.getReposByUsername = getReposByUsername;