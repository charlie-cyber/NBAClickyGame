import React from "react"; 
import logo from "./ImageCard/nba_playoff.jpg";
import "./Jumbotron.css";


function Jumbotron (props){

      return ( 
        <div className="jumbotron">
        <img src={logo} alt="Logo" />
        <br />
        <br />
        <h1>Clicky Game</h1>
        <ul>
          <li>{props.status}</li>
          <li>
            <h3>Current Score: {props.userScore} </h3>
            <h3>High Score: {props.topScore}</h3> 
          
          </li>
        </ul>
        </div>
      );
  }

export default Jumbotron;
