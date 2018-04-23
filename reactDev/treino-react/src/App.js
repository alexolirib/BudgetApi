import React, { Component } from 'react';
import './App.css';
import Summary from './components/Summary'
//import StudyButton from './components/StudyButton'
import Input from './components/Input'
import List from './components/List'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      id: '',
      idControl: 0,
      value: 0,
      request: 'http://localhost:64041/api/budget',
      update: () => {
        this.updateValue();
      }
    }
  }

  onHandle = (prop, val) => {

    this.setState({ [prop]: val })
  }

  setupValue = () => {
    this.setState(prevState => {
      //console.log(prevState);
      let id
      if (prevState.id === '') {
        id = prevState.idControl + 1;
      } else {
        id = prevState.id;
      }

      let obj = {
        id: id,
        type: prevState.type,
        description: prevState.description,
        value: prevState.value
      }
      if (prevState.id === '') {
        this.doPost(obj);
      }

      if (prevState.type === "exp") {
        obj.percentage = 0;
        obj.percentageCalc = (inc) => {
          if (inc > 0) {
            obj.percentage = ((prevState.value / inc) * 100).toFixed(2);
          } else {
            obj.percentage = 0;
          }
        }
      }

      prevState.listProp[prevState.type].push(obj);


      prevState.idControl = obj.id;
      prevState.id = '';
    })

  }
  updateValue = () => {
    this.setState(prevState => {
      let inc = 0;
      let exp = 0;
      for (let income of prevState.listProp["inc"]) {
        inc += parseFloat(income.value);
      }
      for (let expense of prevState.listProp["exp"]) {
        exp += parseFloat(expense.value);
        expense.percentageCalc(inc);
      }
      prevState.valuesProp.inc = inc;
      prevState.valuesProp.exp = exp;
      prevState.amount = inc - exp;
      if (inc > 0) {
        prevState.percentage = ((exp / inc) * 100).toFixed(2);
      } else {
        prevState.percentage = 0;
      }
      return prevState;
    })
  }

  cleanInput = () => {
    this.setState(prevState => ({
      description: '',
      value: ''
    }))
  }

  doPost = (obj) => {
    axios.post(this.state.request, {
      type: obj.type,
      description: obj.description,
      value: obj.value
    })
  }

  doDelete = obj => {
    fetch(this.state.request, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }

  handleSubmit = () => {
    //console.log(`Type - ${this.state.type} Description - ${this.state.description} Value ${this.state.value}`)
    if (this.state.description.trim() !== "" && this.state.value > 0 && !isNaN(this.state.value)) {
      this.setupValue();
      this.updateValue();
    }
    //console.log(this.state)
  }

  removeBlock = (id, type) => {
    this.setState(prevState => {
      let index = 0;
      for (let list of prevState.listProp[type]) {
        if (list.id === id) {
          let obj = prevState.listProp[type].splice(index, 1);
          this.doDelete(obj[0])
        }
        index++;
      }
      return prevState;
    })
    this.updateValue();
  }

  componentWillMount() {
    console.log("Start Application");

    //request HTTP
    axios.get(this.state.request)
      .then(resp => {
        //console.log(resp);
        for (let list of resp.data) {
          this.setState(prevState => {
            prevState.id = list.id;
            prevState.type = list.type;
            prevState.description = list.description;
            prevState.value = list.value;
          })
          this.setupValue();
          this.updateValue();
        }
      })//aqui irá ter um promise async
      .catch(err => {
        console.log(err)
      })
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
            removeBlock={this.removeBlock}
            update={this.updateValue} />
        </div>

      </div>
    );
  }
}


export default App;
