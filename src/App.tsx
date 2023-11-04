import { useState } from "react";

import "./App.css";
import { MemoOne, MemoTwo } from "./memo/memo-test";
import { StateOne, StateTwo, StateZero } from "./state-ref/use-state-tests";
import { EffectOne, EffectTwo } from "./effect/effect-test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Parent update {count}
      </button>
      <div>⬇</div>

      {/* <StateZero /> */}
      {/* <StateOne /> */}
      {/* <StateTwo /> */}
      {/* <TestRef />  */}
      {/* <EffectOne count={count} /> */}
      {/* <EffectTwo count={count} /> */}
      {/* <MemoOne/> */}
      <MemoTwo count={count} />
    </>
  );
}

export default App;
