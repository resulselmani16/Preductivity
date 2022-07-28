import React from "react";
import { PropTypes } from "react";

const Label = (props) => {
    const labelColors = ["red", "orange", "yellow", "blue", "green", "violet"];
    const labelColor = PropTypes.oneOf(["red", "orange", "yellow", "blue", "green", "violet"]);
  return <div>Label</div>;
};

export default Label;
