import React, { useState } from "react";
import { debounce, throttle } from "lodash";

const DebounceAndThrottle = () => {
  const InputWithJustOnchange = () => {
    const onChange = (e) => {
      console.log("Just onchange value:", e.target.value);
    };

    return <input onChange={onChange} />;
  };

  const InputWithDebouncedOnchange = () => {
    const onChange = (e) => {
      console.log("Debounce Changed value:", e.target.value);
    };

    const debouncedOnChange = debounce(onChange, 1000);

    return <input onChange={debouncedOnChange} />;
  };

  const InputWithThrottledOnchange = () => {
    const onChange = (e) => {
      console.log("Throttle Changed value:", e.target.value);
    };

    const throttledOnChange = throttle(onChange, 1000);

    return <input onChange={throttledOnChange} />;
  };

  return (
    <div>
      <h3>Just onChange callback</h3>
      <InputWithJustOnchange />
      <h3>Debounced onChange</h3>
      <InputWithDebouncedOnchange />
      <h3>Throttled onChange</h3>
      <InputWithThrottledOnchange />
    </div>
  );
};

export default DebounceAndThrottle;
