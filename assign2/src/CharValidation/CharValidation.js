import React from 'react';

const charValidation = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (

        <div 
        className = "charValidation"
        style = {style}
        onClick = {props.clicked}
        >
        {props.character}
        
        </div>
    );
    


};

export default charValidation;