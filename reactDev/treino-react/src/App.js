import React, { Component } from 'react';
import './App.css';
import Summary from './components/Summary'
//import StudyButton from './components/StudyButton'
import Input from './components/Bottom/Input'
import List from './components/Bottom/List'

class App extends Component {
  state = {
    income: 0,
    expense: 0,
    amount: 0
  }
  render() {
    return (
      <div className="App">
        <Summary />
        <div className="bottom">
          <Input />
          <List />
        </div>

      </div>
    );
  }
}

export default App;
