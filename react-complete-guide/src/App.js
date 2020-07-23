import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //capital letter to identify custom componenet 

class App extends Component {
  render() {
    return (
      //typical to root things in one single element (div)
      <div className="App">
        <h1>I am Elijah's React App</h1>
        <Person />
      </div>
    );
    
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is inside an h1'));
  }
}

export default App;
