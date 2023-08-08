import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back!</p>
        </header>

        <main>
          <form>
            <input
              className="nameInput"
              type="text"
              value={name}
              onChange={onChange}
              placeholder="Name"
              id="name"
            />
            <input
              className="emailInput"
              type="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              id="email"
            />

            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="passwordInput"
              />

              <img
                src={visibilityIcon}
                alt="visibility icon"
                className="showPassword"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {/* <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot password?
            </Link> */}

            <div className="signUpBar">
              <p className="signUpText">Sign up</p>
              <button className="signUpButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>

          {/* Google Oauth */}

          <Link to="/sign-in" className="registerLink">
            Already have an account? Sign in
          </Link>
        </main>
      </div>
    </>
  );
}

export default SignUp;
