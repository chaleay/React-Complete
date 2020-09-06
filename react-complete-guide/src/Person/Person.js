import React from 'react';
import './Person.css';

const person = (props) => {
    //return jsx
    //example
    //return <p>This is me, a person at {Math.floor(Math.random() * 30)} years of age</p>
    return (
    <div className='Person'>
        <p onClick={props.click}>My name is {props.name} and my age is {props.age} </p>
        <p>{props.children}</p>
        <input type = "text" onChange={props.changed} value = {props.name}></input>
    </div>
    )
};

export default person;