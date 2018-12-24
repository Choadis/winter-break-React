import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Input from './Input/Input'

class App extends Component {
  state = {
    people: [
      { id: '1', name: 'Choadis', age: 28 },
      { id: '2', name: 'Ayane', age: 26 },
      { id: '3', name: 'Para', age: 12}
    ],
    show: false,
    initValue: '0'
  }

  nameChangeHandler = (event, id) => {
    const peopleIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[peopleIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[peopleIndex] = person

    this.setState({ people: people })
  }

  toggleHandler = () => {
    const doesShow = this.state.show;
    this.setState({show: !doesShow})
  }

  deleteHandler = (ind) => {
    const people = [...this.state.people];
    people.splice(ind, 1);
    this.setState({people: people})
  }

  inputHandler = (event) => {
    if (event !== undefined) {
      let input = event.target.value
      const inpLength = input.length
      console.log(inpLength);
      this.setState({ initValue: inpLength })
    } else {
      return this.state.initValue;
    }
  }

  render() {

    let people = null;

    if (this.state.show) {
      people = (
        <div>
        {this.state.people.map((people, index) => {
          return <Person
          click={() => this.deleteHandler(index)}
          name={people.name}
          age={people.age}
          key={people.id}
          changed={(event) => this.nameChangeHandler(event, people.id)} />
        })}
        </div>
      );
    }

    return (
      <div className="App">
      <h1> React app</h1>
      <Input
      inputHandler={this.inputHandler} />
      </div>
    );
  }
}

export default App;
