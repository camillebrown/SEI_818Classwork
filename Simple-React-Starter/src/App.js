import React, { Component } from "react";
// Components imports
import FunctionalComponent from "./components/FunctionalComponent";
import PlayerContent from "./components/PlayerContent";
import PlayerDetails from "./components/PlayerDetails";
// CSS imports 
import "./css/App.css";

class App extends Component {
  
  state={
    playerName: "Camille"
  }

  updateSelectedPlayer = (playerName) => {
    this.setState({
      playerName: playerName
    })
  }

  render() {
    return (
      <div className="App">
        <FunctionalComponent />
        <PlayerContent 
          playerName="Camille"
          id={0} 
          updateSelectedPlayer={this.updateSelectedPlayer}
          />
          <PlayerContent 
          playerName="Taylor"
          id={1} 
          updateSelectedPlayer={this.updateSelectedPlayer}
          />
        <PlayerDetails playerName={this.state.playerName} />
      </div>
    );
  }
}

export default App;
