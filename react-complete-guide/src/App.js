import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Dora', age: 32}
    ]
  }
  
  switchNameHandler = (newName) =>{
    //DONOT DO THIS!!! this.state.Person[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 30},
        {name: 'Dora', age: 32}
      ],
      showPersons: false  
    })
  }


  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name:  event.target.value, age: 30},
        {name: 'Dora', age: 32}
      ]  
    })
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangeHandler}>My hobbies: singing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
            </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        {/* This way to pass the argument can be inefficient  */}
        <button
          style={style} 
          onClick={this.togglePersonHandler}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
