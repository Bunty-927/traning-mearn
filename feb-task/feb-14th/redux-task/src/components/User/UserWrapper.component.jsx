import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import UserEdit from "./UserEdit.component";

function UserWrapper() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  return <UserEdit editUserId={id} navigate={navigate} />;
}

export default UserWrapper;
