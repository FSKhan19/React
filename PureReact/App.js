const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// Define a React component
function App() {
  // State Management: Declare a new state variable, which we'll call "time".
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  // UseEffect Hook: This hook is used to perform side effects in function components.
  // The function inside `useEffect` will run after every render, including the first one.
  // The empty array `[]` as the second argument means this effect will only run once,
  React.useEffect(function () {
    // Set an interval that updates the time every second.
    const intervalId = setInterval(() => {
      // Update the state with the current time.
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function: This function will run when the component is unmounted.
    // It's used to clear the interval to prevent memory leaks.
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  const timeElement = React.createElement(
    "header", // HTML tag name
    null, // No props for this element
    `Current Time is ${time}` // Text content of the element
  );

  const lunaElement = React.createElement(Pet, {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese",
  });

  // Create and return a React element
  return React.createElement(
    "div", // HTML tag name
    null, // No props for this element
    [timeElement, lunaElement]
  );
}

// Get the root element from the DOM
const container = document.getElementById("root");
// Create a root for React to render into (Virtual DOM)
const root = ReactDOM.createRoot(container);
// Render the App component into the root
root.render(React.createElement(App, null));
