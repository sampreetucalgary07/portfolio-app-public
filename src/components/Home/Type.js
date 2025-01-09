import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "an AI Enthusiast.",
          "a Software Developer.",
          "an AI Researcher.",
          "a Sotware Engineer.",
          "a Data Scientist.",
          "a Machine Learning Engineer.",
          "an Open Source Contributor.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
