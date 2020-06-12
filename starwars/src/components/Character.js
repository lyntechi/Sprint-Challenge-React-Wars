// Write your Character component here
import React from "react";

function Character(props) {
  return (
    <div className="character-container">
      <h1>Name: {props.characterName}</h1>
      <h1>Birth Year: {props.birthYear}</h1>
      {/* <h2>Cargo Capacity: {props.cargo}</h2> */}
    </div>
  );
}

export default Character;
