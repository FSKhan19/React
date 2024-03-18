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

      <Message step={step}> {messages[step]}</Message>
      <div className="buttons">
        <Button
          bgColor={"#7950f2"}
          textColor={"#fff"}
          onClick={() => handlePrev()}
        >
          <span>👈</span> Prev
        </Button>

        <Button
          bgColor={"#7950f2"}
          textColor={"#fff"}
          onClick={() => handleReset()}
        >
          <span>🛞</span> Reset
        </Button>

        <Button
          bgColor={"#7950f2"}
          textColor={"#fff"}
          onClick={() => handleNext()}
        >
          Next <span>👉</span>
        </Button>
      </div>
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step + 1}</h3>
      {children}
    </div>
  );
}

export default Steps;
