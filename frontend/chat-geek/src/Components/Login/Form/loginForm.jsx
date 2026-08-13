import { useState } from "react";
import "./loginForm.css";
import { Link, Navigate } from "react-router-dom";
const LoginForm = () => {
  const googleLink = "https://google.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value)
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value)
  };

  let submitHandler = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="innerBox">
      <h1 className="startText">WELCOME BACK</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="Mail">Email</label>
        <input
          type="email"
          name="Mail"
          className="mail"
          value={email}
          onChange={emailHandler}
          required
        />

        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="Password"
          className="pass"
          value={password}
          onChange={passwordHandler}
          required
        />

        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
      <h1 className="endText">
        Dont have an Account ? <Link to="/sign-up">Register</Link>
      </h1>
    </div>
  );
};

export default LoginForm;
