import { useRef } from "react";
import { heavy } from "../utils/util.jsx";

/**
 * TestRef is logged on every re-render.
 * calculateValue is called on every re-render.
 * value in dom is not updated.
 * value.current remains same
 */
function TestRef() {
  const direct = heavy("TestRef");
  const value = useRef(heavy("TestRef"));
  console.log(value.current);

  return (
    <>
      <div>Ref: {value.current}</div>
      <div>simple const: {direct}</div>
    </>
  );
}

export { TestRef };
