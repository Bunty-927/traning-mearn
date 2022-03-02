import React from "react";
import { Link } from "react-router-dom";

export default function Userlist() {
  let styleElement = {
    margin: "auto",
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
    marginBottom: "25px",
  };

  let data = "";

  data = JSON.parse(localStorage.getItem("userData"));
  console.log(data);

  return (
    <div className="m-auto justify-center inline my-4 mb-8">
      <table style={styleElement}>
        <tbody>
          <tr>
            <td style={styleElement}>ID</td>
            <td style={styleElement}>NAME</td>
            <td style={styleElement}>EDIT</td>
          </tr>
          {data
            ? data.map((user) => (
                <tr
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    textAlign: "center",
                  }}
                  key={user.id}
                >
                  <td style={styleElement}>{user.id}</td>
                  <td style={styleElement}>{user.name}</td>
                  <td style={styleElement}>
                    <button className="text-blue">
                      <Link
                        style={{ textDecoration: "none", color: "#697be0" }}
                        to={`/edituser?id=${user.id}&name=${user.name}`}
                      >
                        Edit User Name
                      </Link>
                    </button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}
