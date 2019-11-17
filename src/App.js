import React, { useState } from 'react';
import './App.css';
import API from './adapters/API'

function App() {

  const [username, setUsername] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = e => {
    let username = e.target.username.value
    e.preventDefault()
    setShowResults(true)
    API.getUserRepos(username)
    .then(repos => {
      setUsername(username)
      setUserRepos(repos)
    })
  }

  const countLangs = repos => {
    // debugger
    return repos.reduce((tally, repo) => {
      if (!tally[repo.language]) {
        tally[repo.language] = 1;
      } else {
        tally[repo.language] = tally[repo.language] + 1;
      }
      return tally;
    }, {})
  }

  const mostPopularLanguage = tally => {
    let keysArray = Object.keys(tally)
    return keysArray.reduce((highest, language) => {
    if (tally[highest] < tally[language]) { highest = language }
      return highest})
    // return Object.keys(tally)
  }

  return (
    <div className="App">
      <h1 className="App-header">
        Forked Tongue
      </h1>
      <p>Find out a Github user's favourite programming language!</p>
        <form onSubmit={handleFormSubmit}>
          <label>Enter their username: 
            <input type="text" name="username"/>
          </label>
          <input type="submit"/>
        </form>
        {showResults && <div>
          {userRepos.length > 1 ? 
            <div>
              <p>{username}'s favourite language is probably {mostPopularLanguage(countLangs(userRepos))}!</p>
            </div>
            : "Loading results..."}
        </div>
        }
    </div>
  );
}

export default App;
