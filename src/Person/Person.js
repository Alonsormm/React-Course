import React from "react";
import TextField from "@material-ui/core/TextField";
import cssClasses from "./Person.module.css";
const person = props => {
  return (
    <div className={cssClasses.Person}>
      <p onClick={props.click}>
        I'm {props["nombre"]} and I'm {props["edad"]} years old!
      </p>
      <TextField
        type="text"
        onChange={props.changed}
        value={props.nombre}
        label="Nombre:"
        variant="outlined"
      />
      <p>{props.children}</p>
    </div>
  );
};

export default person;
