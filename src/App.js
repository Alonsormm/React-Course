import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Button from "@material-ui/core/Button";
class App extends Component {
  state = {
    persons: [
      { id: "11da", nombre: "Alonso", edad: 10 },
      { id: "aaa", nombre: "Juan", edad: 10 }
    ],
    exist: false
  };

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
    const buttonStyle = {
      marginTop: "10px",
      marginButton: "10px"
    };

    var persons = null;

    if (this.state.exist) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                nombre={person.nombre}
                edad={person.edad}
                changed={event => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div style={buttonStyle}>
          <Button
            onClick={this.togglePersonHandler}
            stylvaliane={buttonStyle}
            variant="contained"
            color="secondary"
          >
            Toggle Person
          </Button>
        </div>
        {persons}
      </div>
    );
  }
}

export default App;
