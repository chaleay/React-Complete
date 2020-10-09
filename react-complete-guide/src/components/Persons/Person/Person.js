import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './Person.css';
//import Radium from 'radium'
import classes from './Person.css';
import withClass from '.././../../hoc/withClass';
//can also use React.Fragment instead of Aux
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    

    static contextType = AuthContext;



    
    //after the first render cycle
    componentDidMount() {
        //approach 1
        //this.inputElementRef.focus();
        //approach 2
        this.inputElementRef.current.focus();
        console.log(this.context.AuthContext);
    }

    render() {
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
    
    //return an array instead of a wrapper 
    return (
    //<div className='Person' >
        <Aux>
           
            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login in!</p>}
            
            <p key="i1" onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age} </p>
            <p key="i2">{this.props.children}</p>
            <input 
            key="i3" 
            type = "text" 
            ref={this.inputElementRef}
            //ref = {(inputEl) => {this.inputElement = inputEl}}
            onChange={this.props.changed} 
            value = {this.props.name}></input>
        </Aux>
        
  
    );
    

    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);  