import { useState } from 'react';

export default function Enzyme({ name }) {
  const [stateIndeedIAm, setStateIndeedIAm] = useState("");

  return (
    <>
      <p>My prop is {name}</p>
      <p>My state is {stateIndeedIAm}</p>
      <input name="stateChange" value={stateIndeedIAm} onChange={e => setStateIndeedIAm(e.target.value)} />
    </>
  );
}