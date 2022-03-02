import React from "react";
import Calculator from "./Components/Calculator.component";
import ChildComponent from "./Testcomponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
