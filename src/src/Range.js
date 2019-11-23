import React from "react";

function Range({ speed, setSpeed }) {
  return (
    <div style={{ fontSize: "80%" }}>
      <p>Speed</p>
      <button
        className={speed === 2000 ? "active" : ""}
        onClick={() => setSpeed(2000)}
      >
        SLOW
      </button>
      <button
        className={speed === 1000 ? "active" : ""}
        onClick={() => setSpeed(1000)}
      >
        DEFAULT
      </button>
      <button
        className={speed === 500 ? "active" : ""}
        onClick={() => setSpeed(500)}
      >
        FAST
      </button>
    </div>
  );
}

export default Range;
