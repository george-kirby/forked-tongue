import React, { useState } from 'react';
import './App.css';
import API from './adapters/API'

function App() {

  const [username, setUsername] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault()
    let username = e.target.username.value
    setShowResults(true)
    setUserRepos([])
    API.getUserRepos(username)
    .then(repos => {
      setUsername(username)
      if (repos.length < 1 || repos.message === "Not Found") {
        setUserRepos("none") 
      } else {
       setUserRepos(repos)
      }
    })
  }

  const countLangs = repos => {
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
  }

  const displayResult = () => {
    if (!showResults) { 
      return null
    } else {
      if (userRepos.length < 1) {
        return loading
      } else if (userRepos === "none") {
        return noneFound
      } else {
        return <p>{username}'s favourite language is probably {mostPopularLanguage(countLangs(userRepos))}!</p>
      }
    }
  }

  const loading = <p>Loading results...</p>
  const noneFound = <p>Sorry, we found no repositories associated with that username. Please try again</p>

  return (
    <div className="App">
      <h1 className="App-header">
        Forked Tongue {"-<"} 
      </h1>
      <p>Find out a Github user's favourite programming language!</p>
        <form onSubmit={handleFormSubmit}>
          <label>Enter their username: 
            <input type="text" name="username"/>
          </label>
          <input type="submit"/>
        </form>
        <div> 
          {displayResult()}
        </div>
    </div>
  );
}

export default App;
