import React, { useState, useEffect} from 'react';
import './App.css';
import API from './adapters/API'
require('dotenv').config()

function App() {

  const [userRepos, setUserRepos] = useState([]);

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log(e.target.username.value)
    API.getUserRepos(e.target.username.value)
    .then(setUserRepos)
  }

  const reducer = (tally, repo) => {
    if (!tally[repo.language]) {
      tally[repo.language] = 1;
    } else {
      tally[repo.language] = tally[repo.language] + 1;
    }
    return tally;
  }

  const countLangs = repos => {
    return repos.reduce(reducer, {})
  }

  const mostPop = tally => {
    return Object.keys(tally).reduce((highest, lang) => {
    if (tally[highest] < tally[lang]) { highest = lang }
      return highest})
  }

  return (
    <div className="App">
      <h1 className="App-header">
        Forked Tongue
      </h1>
        <form onSubmit={handleFormSubmit}>
          <label>Enter a github username: 
            <input type="text" name="username"/>
          </label>
          <input type="submit"/>
        </form>
    </div>
  );
}

export default App;
