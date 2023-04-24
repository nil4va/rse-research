import React from "react";
import { CountMemo } from "./countMemo";

export function MemoWith() {
  const [text, setText] = React.useState("");

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <CountMemo />
    </div>
  );
}
