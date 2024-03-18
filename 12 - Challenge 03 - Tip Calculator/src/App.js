import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [selected, setSelected] = useState(0);
  const [selectedFriend, setSelectedFriend] = useState(0);

  const handleReset = function () {
    setBill(0);
    setSelected(0);
    setSelectedFriend(0);
  };

  const tip = bill * ((selected + selectedFriend) / 2 / 100);
  const totalBill = bill + tip;
  return (
    <div>
      <Bill bill={bill} onBillChange={setBill}>
        How much was the bill?
      </Bill>
      <Service selected={selected} onSelect={setSelected}>
        How did you like the Service?
      </Service>
      <Service selected={selectedFriend} onSelect={setSelectedFriend}>
        How did your friend like the Service?
      </Service>

      {bill > 0 && (
        <>
          <PrintBill totalBill={totalBill} bill={bill} tips={tip} />
          <Reset onReset={handleReset}>Reset</Reset>
        </>
      )}
    </div>
  );
}

function Bill({ bill, onBillChange, children }) {
  return (
    <div>
      {children}
      <input
        type="text"
        value={bill}
        onChange={(e) => onBillChange(Number(e.target.value))}
      />
    </div>
  );
}

function Service({ selected, onSelect, children }) {
  return (
    <div>
      {children}
      <select
        onChange={(e) => onSelect(Number(e.target.value))}
        value={selected}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function PrintBill({ totalBill, bill, tips }) {
  return (
    <b>
      You Pay ${totalBill} (${bill} + ${tips} tip)
    </b>
  );
}

function Reset({ onReset, children }) {
  return <button onClick={() => onReset()}>{children}</button>;
}

export default App;
