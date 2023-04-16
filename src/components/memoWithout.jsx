import React from "react";
import { Count } from "./count";

export function MemoWithout() {
    const [text, setText] = React.useState("");

    return (
        <div className="App">
            <input value={text} onChange={e => setText(e.target.value)} />
            <Count />
        </div>
    );
}
