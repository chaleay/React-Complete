import React from 'react';

const userOutput = (props) => {
    const style = {
        borderTop: '2px solid',
        backgroundColor: '#81BBFD'
        
    }

    return (
        <div className = "UserOutput" style = {style} >
            <p>Username: {props.username}</p>
            <p>New Username: {props.newUsername}</p>  
        </div>
    ) 

};

export default userOutput;