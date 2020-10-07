import React, { Component } from 'react';
//import './App.css';
//import Person from '../components/Persons/Person/Person'; //capital letter to identify custom component - thats the convention
//import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] Constructor");

  }


  //State is a reserved property name
  state = {
    persons: [
      { id: 'fuck1',  name: 'Max', age: 28 },
      { id: 'fuck2',  name: 'Stephy', age: 27 },
      { id: 'fuck3',  name: 'Cuntmuffin', age: 21 }

    ],

    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  
  }


  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;

  }

  
  componentDidMount() {
    console.log("[App.js] comoponentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate");
  }

/*
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
*/

  deletePersonHandler = (personIndex) => {
      //returns a shallow copy of the array
      //const persons = this.state.persons.slice();

      //es6 feature
      const persons = [...this.state.persons];
      
      //at personIndex, delete this person from the array
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  
  nameChangedHandler = ( event, id ) => {
    //search the array for the index of the person matching the provided id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //create a seperate object rather than directly mutate the reference entirely
    const person = {  
    ...this.state.persons[personIndex] 
    };
    
    //another way of doing the same thing as above
    //const person = Object.assign({}, this.state.persons[personIndex]);
  
    //update name value in persons object we defined above
    person.name = event.target.value;

    //retrieve a copy of the persons state array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  }
  
  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //set our state var of showPersons to the opposite of whatever it is currently set at
    this.setState({showPersons : !doesShow});
    
  }

  render() {
    console.log('[App.js] render');
    /*
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid #4C9FD6',
      padding: '8px',
      cursor: 'pointer',
      //inline hover style courtesy of Radium - however could do this using nested classes
      
      /*Radium Code - need radium to run
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'


      }
      
    };
    */
    //define block scope variable persons (defined in render)
    let persons = null;
    //have to use multiple parentheses if you pass in more than one parameter for a JS object
    //tags you pass into jsx = props
    if ( this.state.showPersons ) {
        persons = (
          
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}           
            />
        

        );
          /*change the color of the button to red
          StyledButton.backgroundColor = 'red'; 
          //access the hover component of the style object
          StyledButton[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
          };
          */
          
          //button now has the button class and the red class 
        
    } 
    


    return (
      //JSX
      //typical to root things in one single element (div)
      //when using an arrow function, it implicity adds a return keyword in front of the code
      //warning - the arrow notation can be inefficient
       //one way of doing this, but can lead to confusing code
      //this.state.showPersons ? (then wrap shit in div here)
      
      <div className={classes.App}>
        <button onClick={() => {
            this.setState({showCockpit : !this.state.showCockpit});
        }}>Toggle Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
          Title = {this.props.appTitle}
          showPersons = {this.state.showPersons} 
          personsLength = {this.state.persons.length}
          clicked={this.tooglePersonsHandler}
        /> : null }
        {persons}  
        <p id={classes.test}>ID Selector in React - Example</p>
      </div>
      
    );
    
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is inside an h1'));
  }
}

//wraps our component
export default App;
