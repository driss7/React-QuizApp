import React, { Component } from 'react';
import QuestionBox from './components/question-box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Quiz</h1>
        </header>
        <QuestionBox />
      </div>
    );
  }
}

export default App;
