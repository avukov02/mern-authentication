import React, { useContext, useState } from "react";
import axios from "axios";
import "./Login.scss";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login/", loginData, {
        withCredentials: true,
      });
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
      setErrorMsg(err.response.data.errorMessage);
    }
  }

  return (
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <h3 className="error">{errorMsg}</h3>
      </form>
    </div>
  );
}

export default Login;
