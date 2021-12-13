import React, { useState } from "react";
import Header from "./Header"
import Accordion from "./Accordion";
import Search from "./Search";
import Translate from "./Translate";
import Dropdown from "./Dropdown";
import Route from "./Route";

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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <button className='ui secondary button'>Toggle</button>
        <Dropdown
        label='Select a color'
        options={options}
        selected={selected}
        onSelectionChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
