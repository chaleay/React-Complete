import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //capital letter to identify custom componenet 

class App extends Component {
  //State is a reserved property name
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Stephy', age: 27 }

    ]
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'FuckerFag', age: 28 },
        { name: 'Stephy', age: 27 }
      ]
    })
  }

  render() {
    return (
      //JSX
      //typical to root things in one single element (div)
      <div className="App">
      <br></br>
      <button onClick = {this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies include being gay</Person>
      <Person name="Bimmy" age="29"></Person>
      </div>
    );
    
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is inside an h1'));
  }
}

export default App;
