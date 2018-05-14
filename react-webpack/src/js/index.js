import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

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
        <Route exact path="/pageb/:param" component={PageB}></Route>
        {/* Redirect路由跳转 */}
        <Redirect from="/redirect" to="/"></Redirect>
        {/* 注意：要把404错误页面设置到所有路由后面 */}
        <Route component={ErrorPage}></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
)