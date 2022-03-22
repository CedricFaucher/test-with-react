import SubComponent from "./SubComponent";

import { useState } from 'react';

export default function Component({ name }) {
  const [clicked, setClicked] = useState(0);
  const [input, setInput] = useState("");

  const returnString = () => {
    return "I am component!";
  };

  return (
    <div className="toto">
      <p data-testid="string">{returnString()}</p>
      <button data-testid="button" onClick={() => setClicked(clicked + 1)}>Click me!</button>
      <p data-testid="resultString">Bravo {name}, you clicked {clicked} times!</p>
      <SubComponent input={input} setInput={setInput} />
      <p>I am showing what is in the state input: {input}</p>
    </div>
  );
}