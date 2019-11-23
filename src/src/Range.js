import React from "react";

function Range({ speed, setSpeed }) {
  return (
    <div style={{ fontSize: "80%" }}>
      <p>SPEED</p>
      {/* <button
        className={speed === 2000 ? "active" : ""}
        onClick={() => setSpeed(2000)}
      >
        Slow
      </button> */}
      <button
        className={speed === 1000 ? "active" : ""}
        onClick={() => setSpeed(1000)}
      >
        Default
      </button>
      <button
        className={speed === 500 ? "active" : ""}
        onClick={() => setSpeed(500)}
      >
        Fast
      </button>
    </div>
  );
}

export default Range;
