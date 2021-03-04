import React, { useEffect, useState } from "react";
import Axios from "axios";

function HeaderLoggedOut(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", {
        username,
        password,
      });
      if (response.data) {
        console.log(response.data);
        props.setLoggedIn(true);
        localStorage.setItem("complexappToken",response.data.token)
        localStorage.setItem("complexappUsername",response.data.username)
        localStorage.setItem("complexappAvatar",response.data.avatar)
      } else {
        console.log(
          `userName/ password is not correct ${username + "/" + password}`
        );
      }
    } catch {
      console.log("there is an problem!...");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              className="form-control form-control-sm input-dark"
              type="text"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control form-control-sm input-dark"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success btn-sm">Sign In</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default HeaderLoggedOut;
