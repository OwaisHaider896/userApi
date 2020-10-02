import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);

  const click = async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${user}`
    );

    const { items } = await response.json();
    setUserData(items);
  };

  return (
    <div className="App">
      <h1>GitHub</h1>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button className="btn" onClick={click}>
        Search
      </button>

      <ul className="list">
        <div className="info">
          {userData.map((value) => (
            <li key={value.id}>
              <p> {value.login} </p>
              <img className="image" src={value.avatar_url} alt={value.login} />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
