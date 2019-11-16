import React, { useState, useEffect} from 'react';
import './App.css';
import API from './adapters/API'

function App() {

  const [userRepos, setUserRepos] = useState([]);

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log(e.target.username.value)
    API.getUserRepos(e.target.username.value)
    .then(setUserRepos)
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
