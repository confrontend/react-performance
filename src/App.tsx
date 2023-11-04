import { useState } from "react";

import "./App.css";
import { MemoOne, MemoTwo } from "./memo/memo-test";
import { StateOne, StateTwo, StateZero } from "./state-ref/use-state-tests";
import { EffectOne, EffectTwo } from "./effect/effect-test";
import { CallbackOne, CallbackTwo } from "./callback/callback-tests";

function App() {
  const [bool, setBool] = useState(false);

  return (
    <>
      <button onClick={() => setBool((v) => !v)}>
        Parent update {String(bool)}
      </button>
      <div>⬇</div>

      {/* <StateZero /> */}
      {/* <StateOne /> */}
      {/* <StateTwo /> */}
      {/* <TestRef />  */}
      {/* <EffectOne count={count} /> */}
      {/* <EffectTwo count={count} /> */}
      {/* <MemoOne/> */}
      {/* <MemoTwo count={count} /> */}
      <CallbackOne initialValue={bool} />
      <CallbackTwo initialValue={bool} />
    </>
  );
}

export default App;
