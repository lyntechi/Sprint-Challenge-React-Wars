// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
  color: lightgreen;
  display: flex;
  opacity: 0.8;
  width: 300px;
  flex-direction: row;
  margin: 10px;
  width: 900px;
`;
const H2Style = styled.h2`
  margin-left: 30px;
  padding: 20px;
  font-style: italic;
  background-image: url(https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80);
  background-size: cover;
  font-size: 25px;
`;

function Character(props) {
  return (
    <CharacterCard>
      <H2Style>Name: {props.characterName} </H2Style>
      <H2Style> Birth Year: {props.birthYear} </H2Style>
    </CharacterCard>
  );
}

export default Character;
