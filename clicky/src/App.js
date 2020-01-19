import React, { Component } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import "./components/Jumbotron.css"
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper"
import images from "./components/players.json";

class App extends Component {
  state = {
    images,
    chosenPlayers: [],
    userScore: 0,
    topScore: 0,
    status: ""
  };

  playersChosen = id => {
    let beforeChosen = this.state.chosenPlayers.slice();
    let userScore = this.state.userScore;
    let topScore = this.state.topScore;

    if (this.state.chosenPlayers.includes(id)) {
      this.setState({
        userScore: 0,
        topScore: topScore,
        chosenPlayers: [],
        status: "Airball, Go get some gatorade and refresh!"
      });
      return;
    }
    // shuffle images once clicked
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    if (!this.state.chosenPlayers.includes(id)) {
      if (userScore === topScore) {
        userScore++;
        topScore++;
      } else {
        userScore++;
      }
      beforeChosen.push(id);

      if (beforeChosen.length === 10) {
        this.setState({
          userScore: 0,
          topScore: userScore,
          status: "Swish! Come get buckets again!",
          chosenPlayers: []
        });
        return;
      }
    }

    this.setState({
      userScore: userScore,
      topScore: topScore,
      chosenPlayers: beforeChosen,
      status: ""
    });
  };
  //map each object
  render() {
    return (
     <>
       <Jumbotron
       userScore={this.state.userScore}
       topScore={this.state.topScore}
       status={this.state.status}
       />
      <Wrapper>
          {this.state.images.map(image => (
            <ImageCard
              image={image.image}
              alt={image.name}
              id={image.id}
              key={image.id}
              playersChosen={this.playersChosen}
            />
          ))}
        </Wrapper>
     </>
        
    );
  }
}

export default App;
