import React, { useState } from "react";

const UserForm = () => {
  const [login, setLogin] = useState(true);

  const clearLocalStorage = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setLogin(false);
  };

  const handleSubmit = () => {
    let userEmail = localStorage.getItem("userEmail");
    let userName = localStorage.getItem("userName");

    if (
      userEmail === "" ||
      userName === "" ||
      userEmail === null ||
      userEmail === null
    ) {
      alert("All fields are mandatory");
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  return (
    <div>
      {login ? (
        <div>
          <h1>user already logged in</h1>
          <button onClick={() => clearLocalStorage()}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <h3>Enter your details to login</h3>
          <div>
            <input
              type="text"
              name="userEmail"
              id=""
              placeholder="EMAIL ID"
              onChange={(e) =>
                localStorage.setItem("userEmail", e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="userName"
              id=""
              placeholder="EMAIL NAME"
              onChange={(e) => localStorage.setItem("userName", e.target.value)}
            />
          </div>
          <button onClick={() => handleSubmit()}>SAVE DETAILS</button>
        </div>
      )}
    </div>
  );
};

export default UserForm;
