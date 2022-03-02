import React, { Component } from "react";
import CustomImage from "./CustomImage.component";
import EditCompleteUserDetails from "./EditCompleteUserDetails.components";
// import EditDetails from "./EditUserDetails.component";

const deleteData = async (id) => {
  await fetch(`https://retoolapi.dev/o686nx/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => console.log(data))
    .then(() => console.log("deleted"));
};

export default class UserDetails extends Component {
  state = {
    showAllOptions: false,
  };

  handleShowAllData = (callback) => {
    callback(true);
  };

  styleElement = {
    margin: "auto",
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
  };

  render() {
    const { obj, onShowAllData } = this.props;
    const { showAllOptions } = this.state;

    return (
      <div>
        <div
          style={{
            margin: "auto",
            width: "fit-content",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          <p>{obj.id}</p>
          <p>{obj.email}</p>
          <p>{obj.first_name}</p>
          <p>{obj.last_name}</p>
          <CustomImage url={obj.avatar} />
          <div>
            <button onClick={() => this.handleShowAllData(onShowAllData)}>
              Show All Data
            </button>
          </div>
          <div>
            <button
              onClick={() => this.setState({ showAllOptions: !showAllOptions })}
            >
              Edit Data
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                deleteData(obj.id);
              }}
            >
              Delete User
            </button>
          </div>
        </div>
        {showAllOptions ? <EditCompleteUserDetails data={obj} /> : ""}
      </div>
    );
  }
}
