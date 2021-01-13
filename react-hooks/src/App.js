import React, { Component } from "react";
// Components imports
import AwesomeWidget from "./components/AwesomeWidget";

// CSS imports 
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AwesomeWidget />
      </div>
    );
  }
}

export default App;
