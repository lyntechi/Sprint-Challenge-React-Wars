import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const [characters, setCharacters]=useState([])
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/starships/12/")
      .then((response) => {
        console.log("API responded successfully", response.data);
        setCharacters(response.data)
      })
      .catch((error) => {
        console.log("something went wrong with API response", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
    
    <Character />
  );
};

export default App;
