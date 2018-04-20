import React, { Component } from 'react';
import './App.css';
import Summary from './components/Summary'
//import StudyButton from './components/StudyButton'
import Input from './components/Input'
import List from './components/List'

class App extends Component {
  state = {
    valuesProp: {
      inc: 0,
      exp: 0      
    },
    listProp: {
      inc: [],
      exp: []
    },
    amount: 0,
    type: 'inc',
    description: '',
    value: 0
  }

  onHandle = (prop, val) => {

    this.setState({ [prop]: val })
  }

  setupValue = () => {
    this.setState(prevState => {
      //console.log(prevState);
      let id
      if (prevState.listProp[prevState.type].length === 0) {
        //console.log("entrou")
        id = 1;
      } else {
        id = prevState.listProp[prevState.type][prevState.listProp[prevState.type].length - 1]["id"] + 1;

      }
        
      let obj ={
        id: id,
        type: prevState.type,
        description: prevState.description,
        value: prevState.value
      }

      prevState.listProp[prevState.type].push(obj);

      //console.log(prevState);

      //return prevState
    })
    
  }
  updateValue = () =>{
    this.setState(prevState =>{
      let inc = 0;
      let exp = 0;
      for(let income of prevState.listProp["inc"]){
        inc += parseFloat(income.value);
      }
      for(let expense of prevState.listProp["exp"]){
        exp += parseFloat(expense.value);
      }
      prevState.valuesProp.inc = inc;
      prevState.valuesProp.exp = exp;
      prevState.amount = inc - exp;
      return prevState;
    })
  }

  cleanInput = () =>{
    this.setState(prevState =>({
       description: '',
       value: ''
     }))
  }

  handleSubmit = () => {
    //console.log(`Type - ${this.state.type} Description - ${this.state.description} Value ${this.state.value}`)
    
    this.setupValue();
    this.updateValue();
    //this.cleanInput();
    console.log(this.state)

    console.log("Entrou");
  }

  render() {
    return (
      <div className="App">
        <Summary
          inc={this.state.valuesProp["inc"]}
          exp={this.state.valuesProp["exp"]}
          amount={this.state.amount} />
        <div className="bottom">
          <Input
            type={this.state.type}
            description={this.state.description}
            value={this.state.value}
            handleChange={this.onHandle}
            submit={this.handleSubmit} />
          <List />
        </div>

      </div>
    );
  }
}


export default App;
