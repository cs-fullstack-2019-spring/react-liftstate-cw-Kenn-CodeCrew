import React, { Component } from 'react';
import './App.css';
import PlayerNumber from "./PlayerNumber";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      lastPressed: "",
      player1Score: 0,
      player2Score: 0,
      winnerSoFar: "",
    };
  }

  updatePlayerScore=(playerNumber)=>{
    if(playerNumber===1)
      this.setState({player1Score: this.state.player1Score + 1}, this.someSortOfWinningCondition);
    else if(playerNumber===2)
      this.setState({player2Score: this.state.player2Score + 1}, this.someSortOfWinningCondition);
    else
      console.log("Some sort of error!!!!!");
  };

  changeLastPressed = (lastPerson)=>{
    this.setState({
      lastPressed: "Player " + lastPerson + " pressed the button last",
    })
  };

  someSortOfWinningCondition(){
    if(this.state.player1Score > this.state.player2Score)
      this.setState({winnerSoFar: "Player1"});
    else if(this.state.player1Score < this.state.player2Score)
      this.setState({winnerSoFar: "Player2"});
    else
      this.setState({winnerSoFar: "tied"});
  }


  render() {
    return (
        <div>
          <div className="App">
            <PlayerNumber number={1} score={this.state.player1Score} changeLastPressed={this.changeLastPressed} updatePlayerScore={this.updatePlayerScore} />
            <h1>Winner so far {this.state.winnerSoFar}</h1>
            <PlayerNumber number={2} score={this.state.player2Score} changeLastPressed={this.changeLastPressed} updatePlayerScore={this.updatePlayerScore}  />
          </div>
          <h1>{this.state.lastPressed}</h1>
        </div>
    );
  }
}

export default App;
