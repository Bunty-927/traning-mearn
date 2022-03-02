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
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-2xl underline"
              : "mx-4 text-2xl hover:underline"
          }
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-2xl underline"
              : "mx-4 text-2xl hover:underline"
          }
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 text-2xl underline"
              : "mx-4 text-2xl hover:underline"
          }
          to="/group"
        >
          Group
        </NavLink>
      </div>
    );
  }
}
