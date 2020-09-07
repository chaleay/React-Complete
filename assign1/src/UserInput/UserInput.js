import React from 'react';

const userInput = (props) => {
    //styling inline
    const style = {
        backgroundColor: '#3F7FBF',
        paddingBottom: '10px',
        paddingTop: '10px',
    }
    //return jsx
    //example
    //return <p>This is me, a person at {Math.floor(Math.random() * 30)} years of age</p>
    return (
    <div className='UserInput' style = {style}>
       <input type ='text' onChange = {props.changed}></input>
    </div>
    )
};

export default userInput;