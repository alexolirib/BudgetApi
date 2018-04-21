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
    percentage: 0,
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

      if(prevState.type === "exp"){
        obj.percentage = 0;
        obj.percentageCalc = (inc) =>{
          if(inc > 0){
            obj.percentage = ((prevState.value/inc)*100).toFixed(2);
          } else{
            obj.percentage = 0;
          }
        }
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
        expense.percentageCalc(inc);
        console.log(expense.percentage);
      }
      prevState.valuesProp.inc = inc;
      prevState.valuesProp.exp = exp;
      prevState.amount = inc - exp;
      if(inc > 0){
        prevState.percentage = ((exp/inc)*100).toFixed(2);
      } else{
        prevState.percentage = 0;
      }
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

  removeBlock = (id,type) => {
    console.log(`id - ${id} e o type - ${type}`);
    this.setState(prevState=>{
      let index = 0;
      for(let list of prevState.listProp[type]){
        if(list.id === id){
          prevState.listProp[type].splice(index,1);
        }
        index++;
      }
      return prevState;
    })
    this.updateValue();
  }

  render() {
    return (
      <div className="App">
        <Summary
          inc={this.state.valuesProp["inc"]}
          exp={this.state.valuesProp["exp"]}
          amount={this.state.amount}
          percentage={this.state.percentage} />
        <div className="bottom">
          <Input
            type={this.state.type}
            description={this.state.description}
            value={this.state.value}
            handleChange={this.onHandle}
            submit={this.handleSubmit} />
          <List
          inc={this.state.listProp["inc"]}
          exp={this.state.listProp["exp"]}
          removeBlock={this.removeBlock} />
        </div>

      </div>
    );
  }
}


export default App;
