import React, { Component } from "react";
import "./App.css";

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
    }
    return (
      <div className="APP">
        <h1>Mizanur Rahamn </h1>
        <button onClick={this.personsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
