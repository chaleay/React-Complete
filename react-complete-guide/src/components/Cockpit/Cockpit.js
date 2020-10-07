import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    //one of the more important life-cycle hooks
    useEffect(() => {
    

      //useState
      console.log('[Cockpit.js] useEffect');
      const timer = setTimeout(() => {
        
        
        alert('Saved date to cloud');
      }, 3000); //in ms

      return () => {
      
          //when this is unmounted, the timer is cancelled
          //clearTimeout(timer);
          //this will run after every cleanup cycle
          console.log('[Cockpit.js] cleanup work in useEffect');
      }

    }, []);

    useEffect(() => {

      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
          console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };

    });




    const assignedClasses = [];
    let btnClass = [classes.Button];
    
    if(props.showPersons){
        btnClass.push(classes.Red);
    }
    
    

    if (props.personsLength <= 2){
      assignedClasses.push(classes.Red); //classes will be red
    }

    if (props.personsLength <= 1 ){
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

//memo method only causes to cockpit to render in app.js render method if there is something that changes cockpit
export default React.memo(cockpit);