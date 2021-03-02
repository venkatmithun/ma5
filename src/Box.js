import React, { useState } from "react";
export function Box({ handleCount }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={active ? "box-active box" : "box"}
      onClick={() => {
        if (active) {
          handleCount(-1);
        } else {
          handleCount(1);
        }
        setActive(!active);
      }}
    ></div>
  );
}
