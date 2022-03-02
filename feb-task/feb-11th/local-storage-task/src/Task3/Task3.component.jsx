import React, { Component } from "react";

export default class Task3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
    };
  }

  componentDidMount() {
    this.storeImageInLocalStorage();
    this.setState({ imageUrl: JSON.parse(localStorage.getItem("task3")) });
  }

  storeImageInLocalStorage = () => {
    let imageUrl =
      "https://freepngimg.com/thumb/avengers/117295-infinity-avengers-war-free-download-png-hd-thumb.png";
    localStorage.setItem("task3", JSON.stringify(imageUrl));
  };
  render() {
    return (
      <div>
        {this.state.imageUrl ? (
          <img src={this.state.imageUrl} alt="" />
        ) : (
          "No image is present"
        )}
      </div>
    );
  }
}
