import React, {useState} from "react";

function SomeComponentForStates() {
  const [counter, setCounter] = useState(0)

  function handleClick (op) {
    setCounter(counter+Number(op+1))
  }

  return (
    <>
      <div>
        <h1>Counter Example</h1>
        <button onClick={() => handleClick('-')}>-</button>
        <span>{counter}</span>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
    </>
  )
}

export default SomeComponentForStates
