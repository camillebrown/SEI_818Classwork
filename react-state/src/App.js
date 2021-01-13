import React, { Component } from "react";

// import FunctionalComponent from "./components/FunctionalComponent";
import MoodTracker from "./components/MoodTracker";

import "./css/App.css";

class App extends Component {

  // // legacy code looks like this 
  // constructor (props) {
  //   super() //initializes props
  //   this.state = { // then declare the state
  //     count: 0
  //   }
  // }

  state = {
    name: "Camille",
    age: 26,
    animals: ["fox", "lions", "tiger", "giraffe", "zebra"]
  }


  render() {
    return (
      <div className="App">
        {/* <FunctionalComponent /> */}
        <MoodTracker 
          name={this.state.name}
          age={this.state.age}
          animals={this.state.animals}
        />
      </div>
    );
  }
}

export default App;
