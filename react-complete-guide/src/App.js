import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //capital letter to identify custom component - thats the convention


class App extends Component {
  //State is a reserved property name
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Stephy', age: 27 },
      { name: 'Cuntmuffin', age: 21 }

    ]
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 30},
        { name: 'FuckerFag', age: 28 },
        { name: 'JWall', age: 30 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 30},
        //updates on every keystroke
        { name: event.target.value, age: 28 },
        { name: 'JWall', age: 30 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'cream',
      font: 'inherit',
      border: '2px solid #4C9FD6',
      padding: '8px',
      cursor: 'pointer'
      

    };

    //Crea

    return (
      //JSX
      //typical to root things in one single element (div)
      //when using an arrow function, it implicity adds a return keyword in front of the code
      //warning - the arrow notation can be inefficient
      <div className="App">
      <br></br>
      <button 
      style={style}
      onClick = {() => this.switchNameHandler('Mr. Faggot#2')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}></Person>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'MisterTomy')}
      changed={this.nameChangedHandler}>My hobbies include being gay</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}></Person>
      </div>
    );
    
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is inside an h1'));
  }
}

export default App;
