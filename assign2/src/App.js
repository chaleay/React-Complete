import React, { Component } from 'react';
import './App.css';
import Validation from './validate/validate'
import CharValidation from './CharValidation/CharValidation'

class App extends Component {

  state = {
    userInput: ""
  };

  userInputHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });

  }


  deleteCharHandler = ( index ) => {
    //get a string array
    const text = this.state.userInput.split('');
    
    //at index, remove the specificed entry
    text.splice(index, 1);
    //convert the text into a string array
    const updatedText = text.join('');

    //set the state
    this.setState({userInput: updatedText});

  }

  // I HAVE A TINY PENIS 
  //                -Max
  //main method
  render() {
    //this is where we map every char in the userInput to a charValidation
    //but we need to turn charList into an arrayfirst
    //we also get a key error, so to solve this we have to assing a key through html tags
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharValidation character = {ch} 
      key = {index} 
      clicked = {() => this.deleteCharHandler(index)}
      />

    });
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <br></br>
        
        <input 
          type="text" 
          onChange = {this.userInputHandler} 
          value = {this.state.userInput}> 
        </input>
      
        <p>{this.state.userInput.length}</p>
        <Validation inputLength = {this.state.userInput.length}></Validation>
        {charList}
      
      </div>
    );
  }
}

export default App;
