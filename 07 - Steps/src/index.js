import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Steps from "./Steps.js";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {isOpen && <Steps />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
