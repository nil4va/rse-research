import { React, useState } from "react";

const BlockedUI = () => {
  const [color, setColor] = useState(true);

  function calculateSum() {
    let sum = 0;
    let cumulativeOf = 10000000000;
    for (let i = 0; i < cumulativeOf; i++) {
      sum += i;
    }

    alert(`the final sum is: ${sum}`);
  }

  return (
    <div>
      <h1>BlockedUI Page</h1>

      <button onClick={() => calculateSum()}>Calculate Sum </button>
      <button
        onClick={() => setColor(!color)}
        style={{ backgroundColor: color ? "green" : "blue" }}
      >
        Change background
      </button>
    </div>
  );
};

export default BlockedUI;
