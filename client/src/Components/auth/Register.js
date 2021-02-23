import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData, {
        withCredentials: true,
      });
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response.data.errorMessage);
    }
  }

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
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
        <input
          type="password"
          placeholder="Verify your password"
          value={passwordVerify}
          onChange={(e) => setPasswordVerify(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <h3 class="error">{errorMsg}</h3>
    </div>
  );
}

export default Register;
