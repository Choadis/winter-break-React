import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Choadis', age: 28 },
      { name: 'Ayane', age: 26 },
      { name: 'Para', age: 12}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 28 },
        { name: 'Angelia', age: 26 },
        { name: 'Ethan', age: 12}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      people: [
        { name: event.target.value, age: 28 },
        { name: 'Angelia', age: 26 },
        { name: 'Ethan', age: 12}
      ]
    })
  }

  render() {
    const style = {
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
      <h1> React app</h1>
      <button
      style={style}
      onClick={() => this.switchNameHandler('Stefen')}
      >Switch name
      </button>
      <Person
      name={this.state.people[0].name}
      age={this.state.people[0].age}
      nameChangeHandler={this.nameChangeHandler}
      />
      <Person
      name={this.state.people[1].name}
      age={this.state.people[1].age}
      click={this.switchNameHandler.bind(this, 'Choadis')}
      > The real mvp
      </Person>
      <Person
      name={this.state.people[2].name}
      age={this.state.people[2].age}
      />
      </div>
    );
  }
}

export default App;
