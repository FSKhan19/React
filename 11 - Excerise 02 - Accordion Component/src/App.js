import "./App.css";
import faqs from "./faqs";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          title={faq.title}
          text={faq.text}
          num={index}
          key={faq.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`item ${toggle ? "open" : ""}`}
      onClick={() => setToggle(!toggle)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{toggle ? "-" : "+"}</p>

      {toggle && <div className="content-box">{text}</div>}
    </div>
  );
}
