import React from "react";

const Fixed = ({ gameOver, winner }) => {
  return (
    <div
      className={gameOver || winner ? "gameOver" : "fondoGeneral"}
      style={{
        maxWidth: "100vw",
        height: "100vh",
        mixBlendMode: "burn",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 1000,
        pointerEvents: "none"
      }}
    ></div>
  );
};

export default Fixed;
