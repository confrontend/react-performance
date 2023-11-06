import { useState } from "react";

import "./App.css";
import { MemoOne, MemoTwo } from "./memo/memo-test";
import { StateOne, StateTwo, StateZero } from "./state-ref/use-state-tests";
import { EffectOne, EffectTwo } from "./effect/effect-test";
import { CallbackOne, CallbackTwo } from "./callback/callback-tests";
import { RefOne, RefThree, RefTwo } from "./state-ref/use-ref-tests";
import { List } from "./real-world-examples/heavy-computation";

function App() {
  const [bool, setBool] = useState(false);
  const items = [1, 2, 3, 4, 5]; // Example item IDs

  return (
    <>
      <List items={items} />
      {/* <button onClick={() => setBool((v) => !v)}>
        Parent update {String(bool)}
      </button>
      <div>⬇</div> */}
      {/* <StateZero /> */}
      {/* <StateOne /> */}
      {/* <StateTwo /> */}
      {/* <TestRef />  */}
      {/* <EffectOne count={count} /> */}
      {/* <EffectTwo count={count} /> */}
      {/* <MemoOne/> */}
      {/* <MemoTwo /> */}
      {/* <CallbackOne initialValue={bool} /> */}
      {/* <CallbackTwo initialValue={bool} /> */}
      {/* <RefOne /> */}
      {/* <RefTwo /> */}
      {/* <RefThree /> */}
    </>
  );
}

export default App;
