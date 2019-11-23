import React from "react";
import Josephus from "./src/Josephus";

function App() {
  return (
    <div className="App">
      <Josephus />

      <div
        style={{
          maxWidth: "470px",
          margin: "0 auto",
          fontSize: ".7em",
          lineHeight: "1.5em",
          marginTop: "5em",
          marginBottom: "3em"
        }}
      >
        <p>
          Read more about{" "}
          <a
            href="https://en.wikipedia.org/wiki/Josephus_problem"
            title="Josephus problem on Wikipedia."
            target="_blank"
            rel="noopener noreferrer"
          >
            Josephus permutation on wikipedia
          </a>
          . Inspired by this{" "}
          <a
            title="Josephus Permitation on Codewars."
            href="https://www.codewars.com/kata/josephus-permutation/javascript"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codewars kata by GiacomoSorbi.
          </a>
        </p>
        <p>
          Sprites from{" "}
          <a
            href="https://store.steampowered.com/agecheck/app/250900/"
            title="The Binding of Isaac Rebirth on Steam."
            target="_blank"
            rel="noopener noreferrer"
          >
            The Binding of Isaac Rebirth
          </a>{" "}
          by{" "}
          <a
            href="https://twitter.com/edmundmcmillen"
            title="Edmund McMillen on twitter."
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Edmund McMillen,
          </a>
          ripped by{" "}
          <a
            href="https://www.spriters-resource.com/pc_computer/bindingofisaacrebirth/"
            title="Spriters Resource."
            target="_blank"
            rel="noopener noreferrer"
          >
            SuperFlomm
          </a>{" "}
          for{" "}
          <a
            href="https://www.spriters-resource.com/"
            title="Spriters Resource."
            target="_blank"
            rel="noopener noreferrer"
          >
            Spriters Resource.
          </a>{" "}
          Cursors from{" "}
          <a
            href="https://github.com/nostalgic-css/NES.css?ref=devawesome"
            title="Nostalgic css on Github."
            target="_blank"
            rel="noopener noreferrer"
          >
            Nes.css
          </a>
        </p>
        <p>
          <a
            title="J.A. Iguacel on twitter"
            href="https://twitter.com/infoiguacel?lang=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            @infoiguacel {new Date().getFullYear()}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
