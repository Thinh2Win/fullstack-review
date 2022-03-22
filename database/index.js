const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', function(err, db) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected successfuly to server');
    db.close();
  }
});

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  name: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);
// const jinsRepo = new Repo({ id: 1, name: 'fullStackReview', forks: 4});
// const tinsRepo = new Repo({ id: 2, name: 'fullStackReview', forks: 6});
// const binsRepo = new Repo({ id: 3, name: 'fullStackReview', forks: 8});
// const repoArray = [jinsRepo, tinsRepo, binsRepo];
let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repos.save();
};
module.exports.save = save;