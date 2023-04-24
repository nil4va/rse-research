import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import BlockedUI from "./components/blockedUI";
import FixedUI from "./components/fixedUI";
import { MemoWithout } from "./components/memoWithout";
import { MemoWith } from "./components/memoWith";
import DebounceAndThrottle from "./components/debounceAndThrottle";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blocked-ui" element={<BlockedUI />} />
          <Route path="/fixed-ui" element={<FixedUI />} />
          <Route path="/without-memo" element={<MemoWithout />} />
          <Route path="/with-memo" element={<MemoWith />} />
          <Route
            path="/debounce-and-throttle"
            element={<DebounceAndThrottle />}
          />

          {/* <Redirect to="/" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
