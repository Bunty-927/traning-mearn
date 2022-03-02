import React from "react";
import { Link } from "react-router-dom";

export default function Grouplist() {
  let styleElement = {
    margin: "auto",
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
    marginBottom: "25px",
  };

  let data = "";

  data = JSON.parse(localStorage.getItem("groupData"));
  console.log(data);

  return (
    <div className="m-auto justify-center inline my-4">
      <table style={styleElement}>
        <tbody>
          <tr>
            <td style={styleElement}>ID</td>
            <td style={styleElement}>GROUP</td>
            <td style={styleElement}>EDIT</td>
          </tr>
          {data
            ? data.map((group) => (
                <tr
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    textAlign: "center",
                  }}
                  key={group.id}
                >
                  <td style={styleElement}>{group.id}</td>
                  <td style={styleElement}>{group.groupName}</td>
                  <td style={styleElement}>
                    <button className="text-blue">
                      <Link
                        style={{ textDecoration: "none", color: "#697be0" }}
                        to={`/editgroup?id=${group.id}&group=${group.groupName}`}
                      >
                        Edit Group Name
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
