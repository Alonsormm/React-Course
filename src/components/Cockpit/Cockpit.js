import React from "react";
import Classes from "./Cockpit.module.css";
import Button from "@material-ui/core/Button";
const cockpit = props => {
  return (
    <div>
      <div className={Classes.Cockpit}>
        <Button onClick={props.clicked} variant="contained" color="secondary">
          Toggle Person
        </Button>
      </div>
    </div>
  );
};

export default cockpit;
