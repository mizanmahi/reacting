import React from 'react'
import  './Person.css'

const Person = props => {

        return (

             <div className="person" >
                 <p onClick={props.deleteHandler}>Hi I'm {props.name} and I'm {props.age} years old</p>
                 <input type="text" onChange={props.changeName} value={props.name} />
             </div>
        )
    };

export default Person;
