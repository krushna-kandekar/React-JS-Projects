import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1); // (Bunch of pakages)
      // setCounter((prevCounter) => prevCounter + 1); // ((IMP = Interview not bunch of pakages)
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hello React!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>

      <p>footer : {counter}</p>
    </>
  );
}

export default App;
