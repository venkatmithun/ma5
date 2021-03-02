import { Box } from "./Box";
import React, { useState } from "react";

export function ActiveBoxes(props) {
  const [count, setCount] = useState(0);

  const handleCount = (c) => {
    setCount(c + count);
  };

  return (
    <div className="App">
      <div>
        <h1>Count: {count}</h1>
      </div>
      <div className="row">
        <Box handleCount={handleCount} />
        <Box handleCount={handleCount} />
      </div>
      <div className="row">
        <Box handleCount={handleCount} />
        <Box handleCount={handleCount} />
      </div>
    </div>
  );
}
