import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
     name: 'Choadis'
  }

  nameChangeHandler = (event) => {
    this.setState({
        name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Assignment 1</h1>
      <UserInput
      name={this.state.name}
      nameChangeHandler={this.nameChangeHandler}
      />
      <UserOutput
      text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, sint."
      text2="Bill Cosby" />
      <UserOutput
      text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rerum vitae blanditiis corporis, eveniet voluptate!"
      text2="Chuck Norris" />
      </div>
    );
  }
}

export default App;
