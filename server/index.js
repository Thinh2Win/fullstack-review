const express = require('express');
const mongoose = require('mongoose');

let app = express();
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const {save, getTop25Repos} = require('../database/index.js');
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', (req, res) => {
  getReposByUsername(req.body.user)
    .then(repos => {
      save(repos.data);
    })
    .then(() => {
      res.send('repos saved');
    })
    .catch(err => {
      res.status(500).send(err);
    });

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', (req, res) => {
  // TODO - your code here!
  getTop25Repos()
    .then((repos)=> {
      res.send(repos);
    })
    .catch(err => {
      res.status(404).send(err);
    });
  // This route should send back the top 25 repos
  // let repos = mongoose.Repo.find({});
  // console.log(db.repos.find({}));
});

let port = 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

