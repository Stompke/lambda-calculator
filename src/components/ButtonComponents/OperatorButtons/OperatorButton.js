import React from "react";

const OperatorButton = (props) => {
  return (
    <button value={props.data.value}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.data.char}
    </button>
  );
};

export default OperatorButton;