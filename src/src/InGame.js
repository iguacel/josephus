import React from "react";

function InGame({ gameOver, winner, playAgain }) {
  return (
    <div className="slidecontainer">
      {gameOver && (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "black",
            opacity: 0.8
          }}
        >
          {gameOver && !winner && (
            <h2 style={{ fontSize: "200%" }}>
              GAME <br />
              OVER
            </h2>
          )}
          {gameOver && winner && <h2 style={{ fontSize: "200%" }}>WINNER</h2>}
          {gameOver || winner ? (
            <button
              style={{
                background: "white",
                color: "black",
                marginTop: "2em"
              }}
              onClick={() => playAgain()}
            >
              PLAY AGAIN
            </button>
          ) : (
            ""
          )}

          <div>
            <p style={{ fontSize: "80%" }}>Score</p>

            <h2 style={{ fontSize: "120%" }}>290</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default InGame;
