import React, { Component } from "react";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images,
    clickedIds: [],
    score: 0,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedIds = this.state.clickedIds;

    if(this.state.clickedIds.includes(id)) {
      this.setState({ clickedIds: [], score: 0, status:  "You've lost. Click to play again!" });
      return;
    } else {
      clickedIds.push(id);

      if(clickedIds.length === images.length) {
        this.setState({score: images.length, status: "You've Won! Click to play again!", clickedIds: []});
        return;
      }

      this.setState({ images, clickedIds, score: clickedIds.length, status: " " });

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky!</h1>
          <p className="App-intro">
            Don't click the same image more than once!
          </p>
        </header><br></br>
        <Score total={this.state.score}
               goal={this.state.images.length}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.images.map(image => (
            <Image
              shuffleScoreCard={this.shuffleScoreCard}
              id={image.id}
              key={image.id}
              image={image.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;