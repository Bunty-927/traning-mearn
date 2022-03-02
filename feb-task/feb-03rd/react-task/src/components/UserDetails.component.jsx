import React, { Component } from "react";
import CustomImage from "./CustomImage.component";
import EditDetails from "./EditUserDetails.component";

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
        </div>
        {showAllOptions ? (
          <table style={this.styleElement}>
            <tbody>
              <tr>
                <td style={this.styleElement}>
                  <EditDetails title="Edit email" data={obj} type="email" />
                </td>
                <td style={this.styleElement}>
                  <EditDetails
                    title="Edit First Name"
                    data={obj}
                    type="first_name"
                  />
                </td>
                <td style={this.styleElement}>
                  <EditDetails
                    title="Edit Last Name"
                    data={obj}
                    type="last_name"
                  />
                </td>
                <td style={this.styleElement}>
                  <EditDetails title="Edit Avatar" data={obj} type="avatar" />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}
