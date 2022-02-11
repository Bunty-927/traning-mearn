import React, { Component } from "react";

class CheckList extends Component {
  state = {
    isCitizen: false,
    isOver21: false,
    isEngineer: false,
  };

  onChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    const { isCitizen, isOver21, isEngineer } = this.state;
    return (
      <div
        style={{
          margin: "auto",
          width: "50%",
          display: "flex",
          "display-direction": "row",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <div>
          <h3>Are you a citizen: {isCitizen ? "Yes" : "No"}</h3>
          <h3>Are you over 21: {isOver21 ? "Yes" : "No"}</h3>
          <h3>Are you engineer: {isEngineer ? "Yes" : "No"}</h3>
        </div>
        <form>
          <label htmlFor="">
            Are you a citizen?
            <input
              type="checkbox"
              checked={isCitizen}
              name="isCitizen"
              onChange={this.onChange}
            />
          </label>
          <br />
          <label htmlFor="">
            Are you over 21?
            <input
              type="checkbox"
              checked={isOver21}
              name="isOver21"
              onChange={this.onChange}
            />
          </label>
          <br />
          <label htmlFor="">
            Are you Engineer?
            <input
              type="checkbox"
              checked={isEngineer}
              name="isEngineer"
              onChange={this.onChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default CheckList;
