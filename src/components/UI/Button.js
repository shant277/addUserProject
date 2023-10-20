import React from "react";
import classes from "./Button.module.css";
/* good example of a resuseable button component */
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
