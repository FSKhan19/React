import { useState } from "react";
import "./App.css";
import questions from "./questions.js";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          className={selectedId === q.id ? "selected" : ""}
          key={q.id}
          onClick={() => {
            setSelectedId(q.id !== selectedId ? q.id : null);
          }}
        >
          <p>{selectedId === q.id ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}
