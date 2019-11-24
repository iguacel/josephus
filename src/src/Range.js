import React from "react";

function Range({ speed, setSpeed }) {
  return (
    <div style={{ fontSize: "80%" }}>
      <p>SPEED</p>

      {speed === 1000 && (
        <button
          className={speed === 1000 ? "active" : ""}
          onClick={() => setSpeed(500)}
        >
          Faster!
        </button>
      )}
      {speed === 500 && (
        <button
          className={speed === 500 ? "active" : ""}
          onClick={() => setSpeed(1000)}
        >
          More slow
        </button>
      )}
    </div>
  );
}

export default Range;
