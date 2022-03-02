import React, { Component } from "react";
import Footer from "./Footer.component";
import Header from "./Header.component";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isDataLoaded: false,
      indivisualUser: {},
      isIndivisualDataLoaded: false,
      showAllData: true,
      showIndivisualData: false,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          users: json,
          isDataLoaded: true,
        });
      });
  }

  render() {
    const {
      indivisualUser,
      isDataLoaded,
      isIndivisualDataLoaded,
      users,
      showAllData,
      showIndivisualData,
    } = this.state;

    // console.log(isDataLoaded);
    // console.log(users);

    if (!isDataLoaded)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );

    let styleElement = {
      margin: "auto",
      border: "1px solid black",
      borderCollapse: "collapse",
      padding: "5px",
    };

    return (
      <div className="App">
        {/* <h1 style={{ textAlign: "center" }}> User Data from fetched API </h1>{" "} */}
        {showAllData ? <Header title="User Data from fetched API" /> : " "}

        {showAllData ? (
          <table
            style={{
              margin: "auto",
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {users.data.map((item) => (
                <tr
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    textAlign: "center",
                  }}
                  key={item.id}
                >
                  <td style={styleElement}>{item.id}</td>
                  <td style={styleElement}>{item.email}</td>
                  <td style={styleElement}>
                    <button
                      onClick={() =>
                        this.setState({
                          indivisualUser: item,
                          isIndivisualDataLoaded: true,
                          showAllData: false,
                          showIndivisualData: true,
                        })
                      }
                    >
                      More details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div></div>
        )}

        {indivisualUser && isIndivisualDataLoaded && showIndivisualData ? (
          <div>
            {indivisualUser && isIndivisualDataLoaded ? (
              <div>
                {/* <p>Detailed View</p> */}
                <Header title={indivisualUser.email} />
                <span>
                  <button
                    onClick={() =>
                      this.setState({
                        showAllData: true,
                        showIndivisualData: false,
                      })
                    }
                  >
                    All details
                  </button>
                </span>

                <table style={styleElement}>
                  <tbody>
                    <tr>
                      <td style={styleElement}>ID</td>
                      <td style={styleElement}>Email</td>
                      <td style={styleElement}>First Name</td>
                      <td style={styleElement}>Last Name</td>
                      <td style={styleElement}>Avatar</td>
                    </tr>
                    <tr>
                      <td style={styleElement}>{indivisualUser.id}</td>
                      <td style={styleElement}>{indivisualUser.email}</td>
                      <td style={styleElement}>{indivisualUser.first_name}</td>
                      <td style={styleElement}>{indivisualUser.last_name}</td>
                      <td style={styleElement}>
                        <img src={indivisualUser.avatar} alt="pic" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <Footer />
      </div>
    );
  }
}
