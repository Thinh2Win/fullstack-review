const axios = require('axios');
const config = require('../config.js');
const Promise = require('bluebird');

var getReposByUsername = (userName) => {
  let options = {
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    url: `https://api.github.com/users/${userName}/repos`,
  };

  return axios(options);

};

module.exports.getReposByUsername = getReposByUsername;