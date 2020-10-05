import React, { Component } from 'react';
import { render } from 'react-dom';
import Person from './Person/Person';


class Persons extends Component {  
    /* 
    static getDerivedStateFromProps(props, state){
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    }
    */
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

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
