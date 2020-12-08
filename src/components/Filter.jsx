https://codesandbox.io/s/goofy-dhawan-lpd4b?file=/src/index.js:0-1114
https://stackoverflow.com/questions/58893340/filter-array-of-objects-based-on-input-field-in-react

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const List = ({ data }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      {data
        .filter(item => {
          if (!value) return true;
          if (item.title.toLowerCase().includes(value.toLowerCase()) || item.text.toLowerCase().includes(value.toLowerCase())) {
            return true;
          }
          return false;
        })
        .map(item => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
    </div>
  );
};

const data = [
  {
    title: "Title 1",
    text: "Test Title 1"
  },
  {
    title: "Title 2",
    text: "Test Title 2"
  },
  {
    title: "javascript",
    text: "placeholder"
  }
];

function App() {
  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
