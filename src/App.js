import React, { Component } from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassCounter />
        <FunctionCounter />
      </div>
    );
  }
}

export default App;
