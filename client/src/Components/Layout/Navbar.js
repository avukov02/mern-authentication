import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [klasa, setClass] = useState("link");
  return (
    <div className="links">
      <Link
        to="/"
        className={klasa}
        onClick={() => {
          setClass("link clicked");
        }}
      >
        Home
      </Link>
      <Link to="/register" className={klasa}>
        Register
      </Link>
      <Link to="/login" className={klasa}>
        Login
      </Link>
      <Link to="/customer" className={klasa}>
        Customers
      </Link>
    </div>
  );
}

export default Navbar;
