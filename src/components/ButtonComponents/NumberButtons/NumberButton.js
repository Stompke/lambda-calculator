import React from "react";


const NumberButton = (props) => {
  return (
    <button onClick={ () => props.setActiveNumber(props.activeNumber + props.data)}>
      {props.data}
    </button>
  );
};

export default NumberButton;