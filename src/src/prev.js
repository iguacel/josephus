import React, { useState, Fragment } from "react";
import useInterval from "./hooks/useInterval";
import useMedia from "./hooks/useMedia";
import { randomInt } from "./utils/utils";
import Fixed from "./Fixed";
import Range from "./Range";
import InGame from "./InGame";
// https://www.codewars.com/kata/josephus-permutation/discuss/javascript

const josephus = (arr, k, i = 0, a = [...arr]) =>
  [...a].map(_ => a.splice((i = (i + k - 1) % a.length), 1)[0]);

const Josephus = () => {
  const size = useMedia(
    // Media queries
    ["(min-width: 0px) and (max-width: 500px)", "(min-width: 500px)"],
    // Column counts (relates to above media queries by array index)
    ["mobile", "desktop"],
    // Default column count
    "mobile"
  );

  const radius = size === "desktop" ? 200 : 120;

  const [n, setN] = useState(
    size === "mobile" ? randomInt(4, 10) : randomInt(4, 14)
  );
  const [k, setK] = useState(randomInt(2, n));

  const [isOn, setOn] = useState(false);
  const [seleccion, setSeleccion] = useState(false);
  // const estadoTocho = useState({
  //   n: size === "mobile" ? randomInt(4, 10) : randomInt(4, 14),
  //   k: randomInt(2, n),
  //   on: false,
  //   seleccion: false,

  // })
  const [list, setList] = useState(new Array(n).fill("").map((x, i) => i + 1));
  // LISTA
  const [josephusList, setJosephusList] = useState(josephus(list, k));
  const [seconds, setSeconds] = useState(0);
  const [speed, setSpeed] = useState(1000);

  // LISTA
  const gameOver = seconds === josephusList.indexOf(seleccion);
  const winner = seconds === n - 1;

  useInterval(
    () => {
      if (seleccion && isOn) {
        setSeconds(seconds + 1);
        setList(list.filter(x => x !== josephusList[seconds]));
      }

      if (seconds + 1 === josephusList.indexOf(seleccion)) {
        setOn(false);
      }
    },
    seconds === n - 1 ? null : speed
  );

  const seleccionar = x => {
    if (!seleccion) {
      setSeleccion(x);
      setOn(true);
    }
    if (x === josephusList[0]) {
      setSeleccion(false);
      setOn(false);
    }
  };

  const playAgain = () => {
    console.log("playAgain");
    setSeleccion(false);
    setOn(true);
    setN(12);
    setK(3);
  };

  return (
    <div>
      <Fixed
        seleccionado={seleccion}
        n={n}
        k={k}
        josephusList={josephusList}
        winner={winner}
        gameOver={gameOver}
      />

      <h4 style={{ marginBottom: "1em" }}>JOSE</h4>

      <div>
        <h1
          className={list.length === 1 ? "survivorText" : ""}
          style={{ fontSize: "200%" }}
        >
          JOSEPHUS <br /> SURVIVOR
        </h1>
        {/* <p>Time elapsed: {seconds}s</p>
        <p>Seleccion: {seleccion}</p> */}
        <p>Killing:</p>
        <p style={{ marginTop: "-.8em" }}>
          <span className="main">1</span> every{" "}
          <span className="main">{k}</span>
        </p>
        <p style={{ fontSize: "80%" }}>
          Remaining: {list.length}/{n}
        </p>

        {list.length > 1 && (
          <p style={{ fontSize: "80%" }}>
            Last dead: no. {josephusList[seconds]}
          </p>
        )}
        {list.length === 1 && (
          <p style={{ fontSize: "80%" }} className="survivorText">
            Survivor: {josephusList[josephusList.length - 1]}{" "}
          </p>
        )}

        {josephusList.map(x => (
          <p key={`josephus${x}`}>{x}</p>
        ))}
        <h1>Seleccion: {seleccion}</h1>

        <div
          className="ulContainer"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            position: "relative"
          }}
        >
          <ul
            style={{
              width: `{width}px`,
              height: 0,
              paddingTop: "100%",
              position: "relative",
              margin: "0 auto",
              transform: `translate(-25px)`
            }}
          >
            {list.map((x, i) => {
              const offsetAngle = 360 / list.length;
              const rotateAngle = offsetAngle * i;
              const isDead = josephusList[seconds] === x;
              const seleccionado = seleccion === x;
              return (
                <Fragment key={i + 1}>
                  <li
                    onClick={() => seleccionar(x)}
                    className={`${isDead ? "dead" : "alive"} ${
                      list.length === 1 ? " survivor" : ""
                    }`}
                    style={{
                      listStyle: "none",
                      height: size === "mobile" ? "30px" : "50px",
                      width: size === "mobile" ? "30px" : "50px",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${rotateAngle}deg) translate(0px, -${
                        !isDead ? radius : 0
                      }px) rotate(-${rotateAngle}deg) scale(${
                        isDead ? 1.4 : 1
                      })`,
                      transition: "all 200ms",
                      // flex
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      animationDelay: `${i * 1600}ms`,
                      willChange:
                        "transform opacity background-image, background-color",
                      backgroundColor: seleccionado ? "#79FF00" : ""
                    }}
                  >
                    <span
                      style={{
                        transform: `${
                          !isDead
                            ? "translate(30px, -10px)"
                            : "translate(30px, -30px) scale(1.2)"
                        }`,
                        background: "black",
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.5em",
                        textAlign: "center"
                      }}
                    >
                      {x}
                    </span>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
      <InGame gameOver={gameOver} winner={winner} playAgain={playAgain} />

      <Range speed={speed} setSpeed={setSpeed} />
    </div>
  );
};

export default Josephus;
