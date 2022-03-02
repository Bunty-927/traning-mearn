import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="my-8">
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
        to="/grouplist"
      >
        Group List
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "mx-4 text-2xl underline" : "mx-4 text-2xl hover:underline"
        }
        to="/productlist"
      >
        Product List
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "mx-4 text-2xl underline" : "mx-4 text-2xl hover:underline"
        }
        to="/userlist"
      >
        User List
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "mx-4 text-2xl underline" : "mx-4 text-2xl hover:underline"
        }
        to="/contact"
      >
        Contact Us
      </NavLink>
    </div>
  );
}
