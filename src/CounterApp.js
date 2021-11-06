//crea todo esto con el snippet rafcp
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    //setCounter(counter + 1)     //opc 1 teniendo ya el valor en una variable
    setCounter((c) => c + 1);     //opc 2 si no tengo el valor en una variable, lo puedo llamar con un callback
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
