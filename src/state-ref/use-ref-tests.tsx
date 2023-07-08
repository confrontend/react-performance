import React, { useRef, useState } from "react";

function calculateValue(param: string) {
  console.log("calculateValue", param);
  const date = String(new Date().getTime());
  return `calculateValue ${param} ${date}`;
}

/**
 * TestRef is logged on every re-render.
 * calculateValue is called on every re-render.
 * value in dom is not updated.
 */
function TestRef() {
  console.log("TestOne");

  const value = useRef(calculateValue("TestOne"));

  return <div>{value.current}</div>;
}

export { TestRef };
