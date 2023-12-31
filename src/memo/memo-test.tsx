import { useMemo, useState } from "react";
import { RandomColorDiv, ReadableTable, heavy } from "../utils/util.jsx";

/**
 * The main difference between useCallback and useMemo is that
 * useCallback returns a memoized callback function,
 * while useMemo returns a memoized value.
 */

/**
 * On every click in parent:
 * Component renders? ✅
 * Component's children get rendered? ✅
 * {heavy} is called? ❌ => Only once
 * {state} changes in UI? ❌
 * Compared to useEffect:
 * 1. avoids a re-render cycle because the value is computed inline during the render phase and does not involve state changes.
 * 2. MemoOne completes its work in one commit phase.
 * 3. useMemo in MemoTwo does the computation synchronously during rendering, blocking the rendering.
 */
function MemoOne() {
  const state = useMemo(() => heavy(), []);
  return (
    <div style={{ border: "1px solid white" }}>
      <ReadableTable value={state} />
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
 */
function MemoTwo() {
  const [refresh, setRefresh] = useState(false);
  // The difference between useMemo and useState with lazy initiation is the dependency array.
  const state = useMemo(() => heavy(), [refresh]);

  const update = () => {
    setRefresh((prev) => !prev);
  };
  return (
    <div style={{ border: "1px solid white" }}>
      <ReadableTable value={state} />
      <RandomColorDiv />
      <button onClick={update}>Force Update</button>
    </div>
  );
}

export { MemoOne, MemoTwo };
