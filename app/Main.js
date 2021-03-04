import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = 'http://localhost:8080'

import ViewSinglePost from "./components/ViewSinglePost"
import CreatePost from "./components/CreatePost"
import Footer100000 from "./components/Footer";
import HomeGuest from "./components/HomeGuest";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Terms from "./components/Terms";
function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem(
    "complexappToken"
  )))
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path="/post/:id">
          <ViewSinglePost />
        </Route>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>

      <Footer100000 />
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
