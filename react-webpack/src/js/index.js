import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import PageA from "./PageA"
import PageB from "./PageB"
import Nav from "./nav"
import ErrorPage from "./ErrorPage"

ReactDOM.render(
  <Router>
    <div>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={PageA}></Route>
        <Route exact path="/pageb" component={PageB}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
)