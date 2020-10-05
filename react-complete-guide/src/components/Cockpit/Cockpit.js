import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    //one of the more important life-cycle hooks
    useEffect(() => {
    

      //useState
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        
        
        alert('Saved date to cloud');
      }, 1000);

      return () => {
          console.log('[Cockpit.js] cleanup work in useEffect');
      }

    }, []);





    const assignedClasses = [];
    let btnClass = [classes.Button];
    
    if(props.showPersons){
        btnClass.push(classes.Red);
    }
    
    

    if (props.persons.length <= 2){
      assignedClasses.push(classes.Red); //classes will be red
    }

    if (props.persons.length <= 1 ){
      assignedClasses.push(classes.Bold); //classes will be red and bold if <= 1 length
    }


    return (

        <div className={classes.Cockpit}>
            <h1>{props.Title}</h1>
             
            <p className = {assignedClasses.join(' ')}>This is a test paragraph</p>
            <button
            className = {btnClass.join(' ')}
            onClick = {props.clicked}>Show Persons</button>
        </div>

        );

};

export default cockpit;