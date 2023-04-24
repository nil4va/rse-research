import { React, useState } from "react";

const FixedUI = () => {
  const [color, setColor] = useState(true);
  const worker = new Worker(new URL("./worker.js", import.meta.url));

  function calculateSum() {
    worker.postMessage(color);

    worker.onmessage = function (message) {
      alert(`the final sum is: ${message.data}`);
      worker.terminate();
    };
  }

  return (
    <div>
      <h1>FixedUI Page</h1>

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

export default FixedUI;
