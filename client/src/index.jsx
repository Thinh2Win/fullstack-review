import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount () {
    axios.get('/repos')
      .then(repos => {
        this.setState({repos: repos.data})
      })
      .catch(err => {
        console.log(err);
      });
  }
  search (userName) {
    console.log(`${userName} was searched`);
    axios.post('/repos', {user: `${userName}`})
      .then (response => {
        console.log(response);
      })
      .then(() => {
        axios.get('/repos')
        .then(repos => this.setState({repos: repos.data}))
      })
      .catch (err => {
        console.log(err);
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));