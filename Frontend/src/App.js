import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import Project from "./components/pages/Project";
import Research from "./components/pages/Research";
import Article from "./components/pages/Article";
import Member from "./components/pages/Member";
import About from "./components/pages/About";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" id="app-home">
          <Navbar path={"home"} />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/project" id="app-project">
          <Navbar path={"project"} />
          <Project />
          <Footer />
        </Route>
        <Route exact path="/research" id="app-research">
          <Navbar path={"research"} />
          <Research />
          <Footer />
        </Route>
        <Route exact path="/article" id="app-article">
          <Navbar path={"article"} />
          <Article />
          <Footer />
        </Route>
        <Route exact path="/member" id="app-member">
          <Navbar path={"member"} />
          <Member />
          <Footer />
        </Route>
        <Route exact path="/about" id="app-about">
          <Navbar path={"about"} />
          <About />
          <Footer />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
