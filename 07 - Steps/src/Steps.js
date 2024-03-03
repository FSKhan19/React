import "./Steps.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(0);

  const handleNext = function () {
    if (step < 2) {
      setStep((x) => x + 1);
    }
  };

  const handlePrev = function () {
    if (step > 0) {
      setStep((x) => x - 1);
    }
  };

  const handleReset = function () {
    if (step > 0) {
      setStep(0);
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 0 ? "active" : ""}>1</div>
        <div className={step >= 1 ? "active" : ""}>2</div>
        <div className={step >= 2 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step + 1}: {messages[step]}{" "}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => handlePrev()}
        >
          Prev
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => handleReset()}
        >
          Reset
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Steps;
