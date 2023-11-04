import { useState } from "react";
import { RandomColorDiv, ReadableTable, heavy } from "../utils/util.jsx";

/**
 * On every click in parent:
 * Component renders? ✅
 * Component's children get rendered? ✅
 * {heavy} is called? ✅
 * {state} changes in UI? ❌
 */
function StateZero() {
  console.log("StateZero");

  const [state] = useState(heavy());

  return (
    <div style={{ border: "1px solid white" }}>
      <ReadableTable value={state}></ReadableTable>
      <RandomColorDiv />
    </div>
  );
}

/**
 * On every click in parent:
 * Component renders? ✅
 * Component's children get rendered? ✅
 * {heavy} is called? ❌ => Only once (delayed computation)
 * {state} changes in UI? ❌
 */
function StateOne() {
  console.log("StateOne");

  const [state] = useState(() => heavy());

  return (
    <div style={{ border: "1px solid white" }}>
      <ReadableTable value={state}></ReadableTable>
      <RandomColorDiv />
    </div>
  );
}

/**
 * On every click in parent:
 * Component renders? ✅
 * Component's children get rendered? ✅
 * {heavy} is called? ❌ => Only once (delayed computation)
 * {state} changes in UI? ✅ (due to setState)
 */
function StateTwo() {
  console.log("StateThree");

  const [state, setState] = useState(() => heavy());
  function update() {
    setState(heavy());
  }

  return (
    <div style={{ border: "1px solid white" }}>
      <ReadableTable value={state}></ReadableTable>
      <RandomColorDiv />
      <button onClick={update}>Set state</button>
    </div>
  );
}

export { StateZero, StateOne, StateTwo };
