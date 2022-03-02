import React from "react";
import UserData from "../data/UserData";
import ProductData from "../data/ProductData";
import GroupData from "../data/GroupData";

const jsonToLocalStorage = () =>
  // localStorage.setItem("userData", JSON.stringify(UserData));
  // localStorage.setItem("productData", JSON.stringify(ProductData));
  localStorage.setItem("groupData", JSON.stringify(GroupData));

export default jsonToLocalStorage;
