import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={() => getAdvice()}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

// Message component
function Message(params) {
  return (
    <p>
      You have read <strong>{params.count}</strong> pieces of advice
    </p>
  );
}
