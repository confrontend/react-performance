import { useState, useCallback, useRef, useEffect } from "react";

/**
 * The creation of a function in JavaScript is not particularly complex or
 * costly in terms of performance. However, in the context of a React
 * application, the issue isn’t so much about the cost of creating the function
 * itself, but rather the implications it has on the React component lifecycle.
 *
 * Every time a function is created in a component, it gets a new reference.
 * This means that even if the function does the exact same thing from render to
 * render, React sees it as a new function because it has a new reference. This
 * can lead to unnecessary re-renders if this function is passed as a prop to a
 * child component, because the child component will see it as a new prop and
 * therefore re-render.
 */
function ChildComponent({ incrementCount }: { incrementCount: () => void }) {
  console.log("ChildComponent rendered");
  useEffect(() => {}, [incrementCount]);
  return <button onClick={incrementCount}>Increment Count</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //   const incrementCount = () => {
  //     setCount(count + 1);
  //   };

  const lastRef = useRef<() => void>();

  if (lastRef.current !== incrementCount) {
    // This will log when useCallback is not used
    console.log("Function is recreated");
    lastRef.current = incrementCount;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent incrementCount={incrementCount} />
    </div>
  );
}

export default ParentComponent;
