import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import updateDataToLocalStorage from "../helper/updateDataToLocalStorage";

const EditProduct = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState("");
  let navigate = useNavigate();

  let id = searchParams.get("id");
  let company = searchParams.get("company");

  const handleUpdate = (e) => {
    e.preventDefault();

    let updatedData = {
      id: parseInt(id),
      car_model: data,
      company: company,
    };

    console.log("clicked");
    updateDataToLocalStorage("productData", id, updatedData);
    navigate("/productlist");
    alert("data edited successfully");
  };

  const handleInput = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="my-10 ">
      <h2>Edit and Update Car Model here</h2>
      <form>
        <input
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name=""
          id=""
          onChange={(e) => handleInput(e)}
          placeholder={searchParams.get("car_model")}
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
};

export default EditProduct;
