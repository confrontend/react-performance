import { useCallback, useRef, useState } from "react";
/**
 * Good usage of useCallback
 */
function CallbackOne({ initialValue }: { initialValue: boolean }) {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    return setState((lastValue) => !lastValue);
  }, []);

  // This ref will hold the previous version of the toggle function
  const lastToggleRef = useRef<() => void>();

  // Compare and log if toggle function is recreated
  if (lastToggleRef.current !== toggle) {
    console.log("this should never be logged");
    lastToggleRef.current = toggle;
  }

  return (
    <div className="childWrapper">
      <div>State: {state ? "True" : "False"}</div>
      <button onClick={toggle}>Toggle state</button>
    </div>
  );
}

/**
 * Bad usage of useCallback
 */
function CallbackTwo({ initialValue }: { initialValue: boolean }) {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState(!state), [state]);

  // This ref will hold the previous version of the toggle function
  const lastToggleRef = useRef<() => void>();

  // Compare and log if toggle function is recreated
  if (lastToggleRef.current !== toggle) {
    console.log("toggle is recreated every time initialValue is changed");
    lastToggleRef.current = toggle;
  }

  return (
    <div className="childWrapper">
      <div>State: {state ? "True" : "False"}</div>
      <button onClick={toggle}>Toggle state</button>
    </div>
  );
}

export { CallbackOne, CallbackTwo };
