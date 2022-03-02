import React from "react";
import { useNavigate } from "react-router-dom";
import UserLogin from "./UserLogin.component";

export default function UserWrapper() {
  const navigate = useNavigate();

  return <UserLogin navigate={navigate} />;
}
