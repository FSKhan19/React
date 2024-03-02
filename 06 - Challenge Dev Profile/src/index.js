import React from "react";
import ReactDOM from "react-dom/client";
import profileData from "./data.js";
import Card from "./Card.js"; // Import the Card component
function App() {
  return (
    <div>
      {profileData.map((profile) => (
        <Card profile={profile} key={profile.id} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
