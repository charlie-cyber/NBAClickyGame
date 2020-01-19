import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <img
      className="players"
      src={props.image}
      id={props.id}
      alt="noopener noreferrer"
      onClick={() => props.playersChosen(props.id)}
    />
  );
}

export default ImageCard;
