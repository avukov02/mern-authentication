import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    history.push("/");
  }
  return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;
