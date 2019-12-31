import React from "react";
import Person from "./Person/Person";
const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        nombre={person.nombre}
        edad={person.edad}
        changed={event => props.changed(event, person.id)}
        click={() => props.clicked(index)}
        key={person.id}
      />
    );
  });

export default persons;
