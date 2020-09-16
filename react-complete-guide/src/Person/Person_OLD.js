import React from 'react';
//import './Person.css';
//import Radium from 'radium'
import styled from 'styled-components'


//styled-components approach
const SpecialDiv = styled.div`

    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;

    @media (min-width: 500px) {
        .Person     {
            width: 450px;
        }
    }

`;

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
    <SpecialDiv>
        <p onClick={props.click}>My name is {props.name} and my age is {props.age} </p>
        <p>{props.children}</p>
        <input type = "text" onChange={props.changed} value = {props.name}></input>
  
    </SpecialDiv>
    )
};

export default person;  