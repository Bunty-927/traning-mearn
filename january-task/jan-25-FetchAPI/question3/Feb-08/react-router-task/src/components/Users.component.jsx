import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./Home.component";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    console.log(data);

    let styleElement = {
      margin: "auto",
      border: "1px solid black",
      borderCollapse: "collapse",
      padding: "5px",
    };

    return (
      <div>
        <Home />
        <table style={styleElement}>
          <tbody>
            {data.map((item) => (
              <tr
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                  textAlign: "center",
                }}
                key={item.id}
              >
                <td style={styleElement}>{item.id}</td>
                <td style={styleElement}>
                  {item.first_name + " " + item.last_name}
                </td>
                <td style={styleElement}>
                  <button>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/profilepic/${item.id}`}
                    >
                      More Details
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
