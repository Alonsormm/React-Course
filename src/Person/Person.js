import React from "react";
import "./Person.css";
import TextField from "@material-ui/core/TextField";
const person = props => {
  return (
    <div className="Person">
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
