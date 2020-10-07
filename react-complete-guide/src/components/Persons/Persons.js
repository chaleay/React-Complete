import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import Person from './Person/Person';


class Persons extends PureComponent {  
    /* 
    static getDerivedStateFromProps(props, state){
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    }
    */
    
    //check to see if our component has been changed (should be rendered again what ever render method contains this class)
   /* shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        //if there are no changes to the persons prop, there is no reason to rerender this object
        //also importnat to know: this check below is a shallow check i.e it checks to see if the pointers are referencing the same spot in memory
        return nextProps.persons !== this.props.persons;
    }
    */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot'};
    }

    //cleanup stuff
    componentWillUnmount(){
        console.log("[Person.js] componentWillUnmount");
    }


    //the one we will probaly use the most often
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[person.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {
        return ( 
            <Person
            click = {() => this.props.clicked(index)} 
            name= {person.name} 
            age = {person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
            />
            );     
        });
    }
};

export default Persons;
