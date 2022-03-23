const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function(err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected successfuly to server');
  }
});

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  name: String,
  forks: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let getTop25Repos = () => {
  return Repo.find({}).sort({forks: -1}).limit(25);
};

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to the MongoDB
  repos.forEach(repo => {
    new Repo({id: repo.id, name: repo.name, forks: repo.forks}).save()
      .catch(err => {
        if (err.code !== 11000) {
          throw err;
        }
      });
  });
};
module.exports.save = save;
module.exports.getTop25Repos = getTop25Repos;