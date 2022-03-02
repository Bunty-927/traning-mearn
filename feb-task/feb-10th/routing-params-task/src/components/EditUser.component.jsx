import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import updateDataToLocalStorage from "../helper/updateDataToLocalStorage";

// http://localhost:3000/edituser/0?sort=name&order=ascending

export default function EditUser() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState("");
  let navigate = useNavigate();

  let id = searchParams.get("id");

  const handleUpdate = (e) => {
    e.preventDefault();

    let updatedData = {
      name: data,
      id: parseInt(id),
    };

    console.log("clicked");
    updateDataToLocalStorage("userData", id, updatedData);
    navigate("/userlist");
    alert("data edited successfully");
  };

  const handleInput = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="my-10 ">
      <h2>Edit and Update User Name here</h2>
      <form>
        <input
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name=""
          id=""
          onChange={(e) => handleInput(e)}
          placeholder={searchParams.get("name")}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={(e) => handleUpdate(e)}
        >
          Update
        </button>
      </form>
    </div>
  );
}
