import React, { Component } from "react";
import EditUser from "./EditUser.component";

export default class DisplayUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAllData: true,
      showEditUser: false,
      editDataIndex: 0,
    };
  }

  render() {
    let { showAllData, showEditUser, editDataIndex } = this.state;

    let styleElement = {
      margin: "auto",
      // border: "1px solid black",
      borderStyle: "outset",
      borderCollapse: "collapse",
      borderWidth: "5px",
      padding: "5px",
      textAlign: "center",
    };

    let dataArray = JSON.parse(localStorage.getItem("pgm1"));

    return (
      <div>
        {showAllData ? (
          <div>
            {dataArray === null ? (
              <p style={{ textAlign: "center" }}>
                No data available. Please add new data to display.
              </p>
            ) : (
              <table
                style={{
                  margin: "auto",
                  border: "1px solid black",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <td style={styleElement}>ID</td>
                  <td style={styleElement}>FIRST NAME</td>
                  <td style={styleElement}>LAST NAME</td>
                  <td style={styleElement}>PHONE</td>
                  <td style={styleElement}>EMAIL</td>
                  <td style={styleElement}>PASSWORD</td>
                  <td style={styleElement}>AVATAR</td>
                  <td style={styleElement}></td>
                </thead>
                <tbody>
                  {dataArray.map((item, index) => (
                    <tr
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        textAlign: "center",
                      }}
                      key={index}
                    >
                      <td style={styleElement}>{index + 1}</td>
                      <td style={styleElement}>{item.first_name}</td>
                      <td style={styleElement}>{item.last_name}</td>
                      <td style={styleElement}>{item.phone}</td>
                      <td style={styleElement}>{item.email}</td>
                      <td style={styleElement}>{item.password}</td>
                      <td>
                        <img
                          style={{ width: "100px", height: "50px" }}
                          src={item.picture}
                          alt=""
                        />
                      </td>
                      <td style={styleElement}>
                        <button
                          onClick={() =>
                            this.setState({
                              showEditUser: true,
                              editDataIndex: index,
                            })
                          }
                        >
                          Edit details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          ""
        )}

        {showEditUser ? <EditUser index={editDataIndex} /> : ""}
      </div>
    );
  }
}
