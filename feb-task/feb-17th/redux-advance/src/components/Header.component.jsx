import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="m-auto my-8 text-center">
      <NavLink
        className={({ isActive }) =>
          isActive ? "mx-4 text-2xl underline" : "mx-4 text-2xl hover:underline"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "mx-4 text-2xl underline" : "mx-4 text-2xl hover:underline"
        }
        to="/calculator"
      >
        Calculator
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "mx-4 text-2xl underline" : "mx-4 text-2xl hover:underline"
        }
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "mx-4 text-2xl underline" : "mx-4 text-2xl hover:underline"
        }
        to="/getdata"
      >
        Add data
      </NavLink>
    </div>
  );
}
