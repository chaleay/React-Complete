import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //capital letter to identify custom component - thats the convention
import Radium, {StyleRoot} from 'radium';


/* The way to not do it
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
*/

class App extends Component {
  //State is a reserved property name
  state = {
    persons: [
      { id: 'fuck1',  name: 'Max', age: 28 },
      { id: 'fuck2',  name: 'Stephy', age: 27 },
      { id: 'fuck3',  name: 'Cuntmuffin', age: 21 }

    ],

    otherState: 'some other value',
    showPersons: false
  
  };
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
      //at personIndex, add one other person 
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
    
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid #4C9FD6',
      padding: '8px',
      cursor: 'pointer',
      //inline hover style courtesy of Radium - however could do this using nested classes
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'


      }

    };
    //define block scope variable persons (defined in render)
    let persons = null;
    //have to use multiple parentheses if you pass in more than one parameter for a JS object
    //tags you pass into jsx = props
    if ( this.state.showPersons ) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
                return <Person
                click = {() => this.deletePersonHandler(index)} 
                name= {person.name} 
                age = {person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />
            })}
          </div>

        );
          //change the color of the button to red
          style.backgroundColor = 'red'; 
          //access the hover component of the style object
          style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
          };



    } 
    
    const classes = [];
    if (this.state.persons.length <= 2){
        classes.push(['red']); //classes will be red
    }

    if (this.state.persons.length <= 1 ){
        classes.push(['bold']); //classes will be red and bold if <= 1 length
    }



    return (
      //JSX
      //typical to root things in one single element (div)
      //when using an arrow function, it implicity adds a return keyword in front of the code
      //warning - the arrow notation can be inefficient
       //one way of doing this, but can lead to confusing code
      //this.state.showPersons ? (then wrap shit in div here)
      <StyleRoot>
      <div className="App">
        <br></br>
        <p className = {classes.join(' ')}>This is a test paragraph</p>
        <button
        style={style}
        onClick = {this.tooglePersonsHandler}
        >Show Persons</button>
        {persons}  
        <p id='test'>ID Selector in React - Example</p>
      </div>
      </StyleRoot>
    );
    
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is inside an h1'));
  }
}

//wraps our component
export default Radium(App);
