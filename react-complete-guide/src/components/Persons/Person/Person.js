import React from 'react';
//import './Person.css';
//import Radium from 'radium'
import classes from './Person.css';

const person = (props) => {
    
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
        <p onClick={props.click}>My name is {props.name} and my age is {props.age} </p>
        <p>{props.children}</p>
        <input type = "text" onChange={props.changed} value = {props.name}></input>
  
    </div>
    )
};

export default person;  