import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  state = {
    persons: [
      { id: "11da", nombre: "Alonso", edad: 10 },
      { id: "aaa", nombre: "Juan", edad: 10 }
    ],
    exist: false
  };

  static getDerivedStateFromPros(props, state) {
    console.log("getDerivedStateFromPros", props);
    return state;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.nombre = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      exist: !this.state.exist
    });
  };

  deletePersonHandler = index => {
    var personsTemp = this.state.persons.slice();
    personsTemp.splice(index, 1);
    this.setState({
      persons: personsTemp
    });
  };

  render() {
    console.log("render");
    var persons = null;

    if (this.state.exist) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.exist}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }

  componentDidMount() {
    console.log("componenDidMount");
  }
}

export default App;
