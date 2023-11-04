import { useEffect, useState } from "react";
import { RandomColorDiv, ReadableTable, heavy } from "../utils/util.jsx";

/**
 * On every click in parent:
 * Component renders? ✅
 * Component's children get rendered? ✅
 * {heavy} is called? ❌ => Only once
 * {state} changes in UI? ❌
 * Compared to useMemo():
 * 1. useEffect causes an extra render cycle because it sets state after the initial render, leading to a second render.
 * 2. EffectOne requires two commit phases due to the state update: one for the initial render and another for the render caused by the state change.
 * 3. EffectOne performs the computation after the component mounts or updates, which is asynchronous and does not block the rendering.
 */
function EffectOne({ count }: { count: number }) {
  const [state, setState] = useState("");
  useEffect(() => {
    setState(heavy());
  }, []);

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
 * {heavy} is called? ✅
 * {state} changes in UI? ✅
 * Compared to useMemo(): same as above
 */
function EffectTwo({ count }: { count: number }) {
  const [state, setState] = useState("");
  useEffect(() => {
    setState(heavy());
  }, [count]);

  return (
    <div style={{ border: "1px solid white" }}>
      <ReadableTable value={state} />
      <RandomColorDiv />
    </div>
  );
}

export { EffectOne, EffectTwo };
