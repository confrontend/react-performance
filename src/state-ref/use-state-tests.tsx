import React, { useState } from "react";

function calculateValue(param: string) {
  console.log("calculateValue", param);
  const date = String(new Date().getTime());
  return `calculateValue ${param} ${date}`;
}

/**
 * StateOne is logged on every re-render.
 * calculateValue is called only once. (delayed computation)
 * value in dom is not updated.
 */
function StateOne() {
  console.log("StateOne");

  const [value, setValue] = useState(() => calculateValue("StateOne"));

  return <div>{value}</div>;
}

/**
 * StateTwo is logged on every re-render.
 * calculateValue is called on every re-render.
 * value in dom is not updated.
 */
function StateTwo() {
  console.log("StateTwo");

  const [value, setValue] = useState(calculateValue("StateTwo"));

  return <div>{value}</div>;
}

/**
 * StateThree is logged on every re-render.
 * calculateValue is called on every re-render.
 * value in dom is updated due to setValue.
 */
function StateThree() {
  console.log("StateThree");

  const [value, setValue] = useState(() => calculateValue("StateThree"));
  function setTheValue() {
    setValue(calculateValue("StateThree"));
  }

  return <div onClick={setTheValue}>{value}</div>;
}

export { StateOne, StateTwo, StateThree };
