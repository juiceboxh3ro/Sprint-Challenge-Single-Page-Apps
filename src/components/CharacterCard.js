import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  return(
    <div className="character-card">
      <img src={props.character.image} alt=""/>
      <h2>{props.character.name}</h2>
      <p>Race: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
      <p>From: {props.character.origin.name}</p>
      <h3>Current location:</h3>
      <p>{props.character.location.name}</p>
      <h3>Appears in:</h3>
      <p>{props.character.episode.length} episode(s)</p>
    </div>
  );
}
