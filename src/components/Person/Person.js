import React from 'react'
import classes from './Person.module.css'

const Person = props => {

        return (

             <div className= {classes.person} >
                 <p onClick={props.deleteHandler}>Hi I'm {props.name} and I'm {props.age} years old</p>
                 <input className={classes.input} type="text" onChange={props.changeName} value={props.name} />
             </div>
        )
    };

export default Person;
