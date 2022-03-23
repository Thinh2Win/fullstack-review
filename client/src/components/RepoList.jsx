import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map(repo => <RepoDisplay repo={repo} key={repo.id}/>)}
  </div>
)

const RepoDisplay = (props) => (
  <div>
    <span>Repo Name = {props.repo.name} # of Forks = {props.repo.forks}</span>
  </div>
)
export default RepoList;