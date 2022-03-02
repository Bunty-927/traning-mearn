import React from "react";

class CH extends React.Component {
  constructor(props) {
    super(props);
    this.Name = "KAPIL";
  }

  render() {
    return <></>;
  }
}












class App extends React.Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
    this.state = {
      A: "",
    };
  }
  componentDidMount() {
    this.setState({
      A: this.myref.current.Name,
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.A}</h1>
        <CH ref={this.myref} />
      </>
    );
  }
}
