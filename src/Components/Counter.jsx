import React, { useState } from "react";

const Counter = () => {
  // to hold counter value we need a state
  const [counter, setCounter] = useState(0);

  //   Function for increment value of counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  //   Function to decrement value of counter
  const decrementCounter = () => {
    counter < 1
      ? alert("Value can't be set to minus")
      : setCounter(counter - 1);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "80vh",
          width: "50%",
        }}
      >
        <h1>Counter App</h1>
        <p>Value of Counter is {counter}</p>
        <button onClick={incrementCounter}>Increment (+)</button>
        <button onClick={decrementCounter}>Decrement (-)</button>
      </div>
    </section>
  );
};

export default Counter;
