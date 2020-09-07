import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "ElijahGaytan",
    newUsername: ""
  };

  nameChangedHandler = (event) => {
    this.setState({
      newUsername: event.target.value
    })
  }

  render() {
    const style = {

    };


    return (
      <div className="App" style = {style}>
        <UserInput changed = {this.nameChangedHandler}></UserInput>
        <UserOutput 
        username = {this.state.username} 
        newUsername = {this.state.newUsername}>
        </UserOutput>
        <UserOutput 
        username = {this.state.username}
        newUsername = {this.state.newUsername}>
        </UserOutput>
        <UserOutput 
        username = {this.state.username}
        newUsername = {this.state.newUsername}>
        </UserOutput>
      </div>
    );
  }
}

export default App;
