import { useState } from "react";

import "./App.css";
import { StateOne, StateThree, StateTwo } from "./state-ref/use-state-tests";
import { TestRef } from "./state-ref/use-ref-tests";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {/* <StateOne />
      <StateTwo /> */}
      {/* <StateThree /> */}
      <TestRef />
    </>
  );
}

export default App;
