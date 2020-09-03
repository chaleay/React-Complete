import React from 'react';

const person = (props) => {
    //return jsx
    //example
    //return <p>This is me, a person at {Math.floor(Math.random() * 30)} years of age</p>
    return <p>My name is {props.name} and my age is {props.age}</p>
};

export default person;