import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date(new Date().toDateString());
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="100"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step} </span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount((sic) => Number(e.target.value))}
        />
        {/* <span> Count: {count} </span> */}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(step > 1 || count > 0) && (
        <div>
          <button
            onClick={() => {
              setStep(1);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
}

export default App;
