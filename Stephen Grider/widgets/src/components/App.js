import React, { useState } from "react";
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

const showAccordion = () => {
  if(window.location.pathname === '/') {
    return <Accordion items={items}/>
  }
}

const showList = () => {
  if(window.location.pathname === '/list') {
    return <Search />
  }
}

const showDropdown = () => {
  if(window.location.pathname === '/dropdown') {
    return <Dropdown />
  }
}

const showTranslate = () => {
  if(window.location.pathname === '/translate') {
    return <Translate />
  }
}

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
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
