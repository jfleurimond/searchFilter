import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const people = [
    "bob",
    "justin",
    "leila",
    "zuri",
    "amanda",
    "jalen",
    "hason",
    "jason",
    "zeek",
    "eren"
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1>Quick Search box</h1>
      <input
        type="text"
        placeholder="searchbox"
        onChange={(e) => setSearch(e.target.value)}
      />
      {people
        .filter((name) => {
          if (name.toLowerCase().includes(search.toLowerCase())) return name;
        })
        .map((names) => (
          <h5> {names} </h5>
        ))}

      <h2>{search}</h2>
    </div>
  );
}
