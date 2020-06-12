import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log("API responded successfully", response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log("something went wrong with API response", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="Header">REACT WARS</h1>

      {characters.map((item, index) => {
        return (
          <Character
            key={index}
            characterName={item.name}
            birthYear={item.birth_year}
          />
        );
      })}
    </div>
  );
};

export default App;
