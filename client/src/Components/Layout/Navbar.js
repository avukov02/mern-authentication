import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import "./Navbar.scss";
import Logo from "../Layout/Logo/Logo";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <div className="links">
      <Link to="/">
        <Logo />
      </Link>
      {loggedIn === false && (
        <div>
          <Link to="/register" className="link">
            Register
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer" className="link">
            Customer List
          </Link>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;
