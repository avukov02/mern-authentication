import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import "./Navbar.scss";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <div className="links">
      <Link to="/" className="link">
        Home
      </Link>
      {loggedIn === false && (
        <>
          <Link to="/register" className="link">
            Register
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer" className="link">
            Customers
          </Link>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;
