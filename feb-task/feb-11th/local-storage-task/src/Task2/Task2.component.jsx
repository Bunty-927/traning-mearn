import React from "react";

class Task2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: "",
      isImagePresent: false,
    };

    this.imageFile = React.createRef();
  }

  componentDidMount() {
    if (localStorage.getItem("task2")) {
      this.setState({ picture: localStorage.getItem("task2") });
    }
  }

  storeImageInLocalStorage = (e) => {
    let imageData = this.imageFile.current.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
      localStorage.setItem("task2", e.target.result);
      this.setState({ isImagePresent: true, picture: e.target.result });
    };
    reader.readAsDataURL(imageData);
  };

  render() {
    return (
      <div>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          accept=".png, .jpg"
          ref={this.imageFile}
          onChange={(e) => this.storeImageInLocalStorage(e)}
        />

        <div>
          {this.state.isImagePresent ? (
            <img src={this.state.picture} alt="" width={250} height={250} />
          ) : (
            "No image is present"
          )}
        </div>
      </div>
    );
  }
}
export default Task2;
