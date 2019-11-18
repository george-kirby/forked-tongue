import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FunctionsForTesting from './FunctionsForTesting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('mostPopularLanguage function', () => {
  it('returns the language with the highest count', () => {
    const input = {
      "Ruby": 25, 
      "JavaScript": 40,
      "Python": 10,
      "Haskell": 2
    }
    const output = "JavaScript"

    expect(FunctionsForTesting.mostPopularLanguage(input)).toEqual(output)
  })
})
