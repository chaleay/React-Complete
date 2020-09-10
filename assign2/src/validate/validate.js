import React from 'react';


const validation = (props) => {
    //better approach than ternary operator
    let validationMessage = "Text long enough";
    
    if(props.inputLength <= 5){
        validationMessage = 'Text too short';
    }
    else{
        validationMessage = 'Text too long';
    }
    
    return (
        <div className = 'validation'>
            
            <p>{validationMessage}</p>
            
        </div>
    );


};


export default validation;