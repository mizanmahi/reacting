import React, { Component } from "react";
import classes from "./App.module.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
        { id:"asd", name: "Mizanur Rahman", age: 25 },
        { id:"wer", name: "Colt steel", age: 20 },
        { id:"fhh", name: "write to change", age: 8 },
        { id:"uii", name: "Jyoti Taranjum", age: 22 }
    ],
    showPerson: false,
  };

  changedNameHandler = (e, id) => {
    let personIndex = this.state.person.findIndex(p => p.id === id);
    let persons = [...this.state.person]
    persons[personIndex].name = e.target.value;

    this.setState({
      person: persons
    });
  };

  personsHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  }
  personDeleteHandler = (id) => {
    let person = [...this.state.person];
    let filteredPerson = person.filter(person => person.id !== id)
    this.setState({person: filteredPerson})
    
  }

  render() {
    let btnCLasses = classes.button + " " + classes.btnblue
    console.log(btnCLasses)
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            deleteHandler={() => this.personDeleteHandler(person.id)} 
            key={person.id} 
            changeName={(event) => this.changedNameHandler(event,person.id)}/>;
          })}
        </div>
      );
      btnCLasses = classes.button + " " + classes.btnred;
    }
    return (
      <div className={classes.App}>
        <h1>Mizanur Rahamn </h1>
        <button className={btnCLasses} onClick={this.personsHandler} >Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
