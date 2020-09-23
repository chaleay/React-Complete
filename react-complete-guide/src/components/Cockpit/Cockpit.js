import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = [classes.Button];
    
    if(props.showPersons){
        btnClass.push(classes.Red);
    }
    


    if (props.persons.length <= 2){
      assignedClasses.push(classes.red); //classes will be red
    }

    if (props.persons.length <= 1 ){
      assignedClasses.push(classes.bold); //classes will be red and bold if <= 1 length
    }


    return (

        <div className={classes.Cockpit}>
            <br></br>
            <p className = {assignedClasses.join(' ')}>This is a test paragraph</p>
            <button 
            className = {btnClass.join('')}
            onClick = {props.clicked}>Show Persons</button>
        </div>

        );

};

export default cockpit;