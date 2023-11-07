 

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import { login } from "../reducers/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState({});
  //getting email password
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  const rememberCheck = useRef(null);
  function remember() {
    // if (rememberCheck.current.checked) {
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("password", password);
    // } else {
    //   localStorage.setItem("email", "");
    //   localStorage.setItem("password", "");
    // }
  }



  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      if (email === userName && password === userPassword) {
        toast.success("Login Successful");
        dispatch(login());
        navigate("/home");
      } else {
        navigate("/login");
        toast.error("Invalid Email OR password");
      }
    } else {
      toast.error("Please Fill all the data");
    }
  };

  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">Please Login</h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              onChange={remember}
              ref={rememberCheck}
              type="checkbox"
              id="rememberMe"
              className="form-checkbox h-4 w-4 text-blue-500 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-700">
              {content.checkbox}
            </label>
          </div>


          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;