import React from "react";

function InGame({ gameOver, winner, playAgain, n, remaining }) {
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
            <>
              <h2 className="survivorText" style={{ fontSize: "200%" }}>
                GAME <br />
                OVER
              </h2>
              <p style={{ fontSize: "80%" }}>
                You are <br />
                fucking dead :(
              </p>
            </>
          )}
          {gameOver && winner && (
            <>
              <h2 className="survivorText" style={{ fontSize: "200%" }}>
                YOU SURVIVED
              </h2>{" "}
              <p style={{ fontSize: "80%" }}>
                <a
                  href="https://youtu.be/EhSYJ2UYFek"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="All my friends are dead"
                >
                  But all your friends <br /> are dead :(
                </a>
              </p>
            </>
          )}
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

            <h2 style={{ fontSize: "120%" }}>{(n - remaining) * 100}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default InGame;
