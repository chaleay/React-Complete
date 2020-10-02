import React, { Component } from 'react';
//import './Person.css';
//import Radium from 'radium'
import classes from './Person.css';

class Person extends Component {
    render() {
    /*
    //anything above 500px, our persons width will stay at 450px
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }   
    };
    */
    
    //return jsx
    //example
    //return <p>This is me, a person at {Math.floor(Math.random() * 30)} years of age</p>
    //also the style keyword here overwrites the existing styling elsewhere
    return (
    //<div className='Person' >
    <div className = {classes.Person}>
        <p onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age} </p>
        <p>{this.props.children}</p>
        <input type = "text" onChange={this.props.changed} value = {this.props.name}></input>
  
    </div>
    )
    

    }
};

export default Person;  