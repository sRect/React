import React from "react"
import { NavLink } from "react-router-dom"

import "../css/nav.css"

const NavBar = () => {
  return(
    <div>
    <NavLink exact to="/" className="blue" activeClassName="active">PageA</NavLink> | &nbsp;
    <NavLink exact to="/pageb" activeClassName="active">PageB</NavLink>
  </div>
  ) 
}

export default NavBar