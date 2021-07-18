import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function Logout() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
  );
}
