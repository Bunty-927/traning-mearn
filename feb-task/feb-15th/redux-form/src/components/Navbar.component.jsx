import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="m-auto my-8 text-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-2xl underline"
              : "mx-4 text-2xl hover:underline"
          }
          to="/"
        >
          Add user
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-2xl underline"
              : "mx-4 text-2xl hover:underline"
          }
          to="/userlist"
        >
          Show Data
        </NavLink>
      </div>
    );
  }
}
