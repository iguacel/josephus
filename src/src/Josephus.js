import React, { useState, Fragment, useEffect } from "react";
import useInterval from "./hooks/useInterval";
import useMedia from "./hooks/useMedia";
import { randomInt } from "./utils/utils";
import Fixed from "./Fixed";
import Range from "./Range";
import InGame from "./InGame";
// https://www.codewars.com/kata/josephus-permutation/discuss/javascript

const debug = false;

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
  const [list, setList] = useState(new Array(n).fill("").map((x, i) => i + 1));
  // LISTA
  const [josephusList, setJosephusList] = useState(josephus(list, k));
  const [seconds, setSeconds] = useState(0);
  const [speed, setSpeed] = useState(1000);

  // LISTA
  const gameOver = seconds === josephusList.indexOf(seleccion);
  const winner = seconds === n - 1;

  const playAgain = () => {
    console.log("update");

    setSeleccion(false);

    setSeleccion(false);
    setN(size === "mobile" ? randomInt(4, 10) : randomInt(4, 14));
    setK(randomInt(2, n));
    setOn(true);
    setSeconds(0);
  };

  useEffect(() => {
    setList(new Array(n).fill("").map((x, i) => i + 1));
    setJosephusList(
      josephus(
        new Array(n).fill("").map((x, i) => i + 1),
        k
      )
    );
  }, [n, k, size]);

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

        {debug && (
          <div
            style={{
              maxWidth: "400px",
              margin: "2em auto",
              background: "gray"
            }}
          >
            <h2>Seleccion: {seleccion}</h2>
            <p>
              {josephusList.map(x => (
                <span key={`josephus${x}`}>{x} - </span>
              ))}
            </p>
          </div>
        )}

        <div
          style={{
            maxWidth: "380px",
            margin: "0 auto",
            fontSize: ".7em",
            lineHeight: "1.5em",
            marginTop: "5em",
            marginBottom: "3em",
            height: "50px"
          }}
        >
          {seconds === 0 && (
            <p>
              Number <span className="main">{josephusList[seconds]}</span> is
              the first to go, select the survivor
            </p>
          )}
        </div>

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
                      transition: "all 500ms",
                      // flex
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: seleccionado ? "#79FF00" : ""
                    }}
                  >
                    <span
                      style={{
                        transform: `${
                          !isDead
                            ? "translate(30px, -14px)"
                            : "translate(30px, -10px) scale(1.2)"
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
