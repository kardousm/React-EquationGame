import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  render() {
    console.log(this)
    const value1 = Math.floor(Math.random() * 100);
	const value2 = Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
	const numQuestions = 0;
	const numCorrect = 0;
    console.log(value1)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
