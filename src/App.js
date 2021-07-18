import "./styles.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function App() {
  const user = useSelector(selectUser);

  return <div>{user ? <Logout /> : <Login />}</div>;
}
