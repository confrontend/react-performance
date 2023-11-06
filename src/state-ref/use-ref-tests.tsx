import { useEffect, useRef, useState } from "react";
import { heavy } from "../utils/util.jsx";

/**
 * RefOne is logged on every re-render.
 * heavy is called on every re-render.
 * value never changes after first render
 */
function RefOne() {
  const direct = heavy();
  const value = useRef(heavy());

  return (
    <>
      <div>Ref: {value.current}</div>
      <div>simple const: {direct}</div>
    </>
  );
}

/**
 * useRef() is like useState() but updating doesn't trigger re-render,
 * very useful if you are doing a lot of manipulation in a chaining fashion,
 * but wouldn't want to trigger a re-render until the end
 */
function RefTwo() {
  const value = useRef(1);
  let forgettable = 1;

  const changeRef = () => {
    /**
     * value is increased but dom is not re-rendered.
     * As soon as the component gets re-rendered for any other reason,
     * the new value will be shown in dom.
     */
    forgettable++;
    console.log(forgettable);

    value.current++;
  };

  return (
    <>
      <div>Ref: {value.current}</div>
      <div>let: {forgettable}</div>
      <button onClick={changeRef}>Change Ref Value</button>
    </>
  );
}

/**
 * One usage is keep track of the "previous" value:
 */
function RefThree() {
  const previous = useRef(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Step 2. current = 1, previous.current = 1 but the value 1 is not reflected in UI
    // because ref change does not trigger a render.
    // Step 3. now previous.current = 1 will be rendered and previous.current = 2 will be stored.
    previous.current = current;
  }, [current]);

  const add = () => {
    // Step 1. current = 1 and a re-render is triggered
    // Step 3. current = 2 and a re-render is triggered
    setCurrent((prev) => prev + 1);
  };

  return (
    <>
      <div>previous: {previous.current}</div>
      <div>current: {current}</div>
      <button onClick={add}>Change Ref Value</button>
    </>
  );
}

export { RefOne, RefTwo, RefThree };
