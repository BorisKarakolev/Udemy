import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite js library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
