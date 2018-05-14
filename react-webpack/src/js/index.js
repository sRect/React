import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

import PageA from "./PageA"
import PageB from "./PageB"
import Nav from "./nav"

ReactDOM.render(
  <Router>
    <div>
      <Nav></Nav>
      <Route exact path="/" component={PageA}></Route>
      <Route path="/pageb" component={PageB}></Route>
    </div>
  </Router>,
  document.getElementById("app")
)