import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViMessage from "../../components/ViMessage";
import ViPasswordInput from "../../components/ViPasswordInput";
import ViTextInput from "../../components/ViTextInput";
import { showSuccessMessage } from "../../utils/notification";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  const doLogin = (e) => {
    let isLogin = false;
    if (email === "admin" && password === "admin") {
      isLogin = true;
    }
    console.log(email, password);
    console.log("is loging");

    if (isLogin) {
      showSuccessMessage('Login successful');
      localStorage.setItem("isLogin", "1");
      navigate("/UserManagement");
    } else {
      // alert("Login failed");
      //  errorMessage = "Incorrent username or password";
      setErrorMessage("Incorrent username or password");
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "1") {
      navigate("/UserManagement");
    }
  });

  return (
    <div className="main">
      <div className="login-container">
        <h1>Login</h1>
        {errorMessage && <ViMessage message = {errorMessage} />}
        {/* <h3>Enter your login credentials</h3> */}
        <form className="form-container" action="">
          <ViTextInput
            label="Email"
            name="email"
            onChange={handleInputChange}
          />

          <ViPasswordInput
            label="Password"
            name="password"
            onChange={handleInputChange}
          />

          <button type="button" onClick={doLogin}>
            Login
          </button>
        </form>
        <p>
          Not registered?
          <a href="#" style={{ textDecoration: "none", marginLeft: "4px" }}>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
