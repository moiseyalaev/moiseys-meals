import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <h1 h1 className="title">
        {" "}
        Moisey's Meals{" "}
      </h1>{" "}
      <form className="form">
        <h2 className="form-title"> Sign Up </h2>{" "}
        <div className="form-group">
          <label htmlFor="email"> Email: </label>{" "}
          <input type="email" id="email" />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="password"> Password: </label>{" "}
          <input type="password" id="password" />
        </div>{" "}
        <button className="submit-button" type="submit">
          Sign Up{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}

ReactDOM.render(<SignUpPage />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
