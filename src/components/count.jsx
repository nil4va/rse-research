import React from "react";

export const Count = () => {
    const [count, setCount] = React.useState(0);
    const renders = React.useRef(0);

    return (
        <div className="App">
            <div>count: {count}</div>
            <div>renders: {renders.current++}</div>
            <button onClick={() => setCount(c => c + 1)}>count + 1</button>
        </div>
    );
}