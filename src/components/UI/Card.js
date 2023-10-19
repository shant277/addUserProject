import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
    return (
      //way to assign classNames to custom components
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
