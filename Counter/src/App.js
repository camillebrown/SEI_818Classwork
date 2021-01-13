import React, { Component } from "react";

// import FunctionalComponent from "./components/FunctionalComponent";
import Counter from "./components/Counter";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FunctionalComponent /> */}
        <Counter />
      </div>
    );
  }
}

export default App;
