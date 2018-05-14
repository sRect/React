import React from "react"
import { NavLink } from "react-router-dom"

import "../css/nav.css"

const NavBar = () => {
  return(
    <div>
    <NavLink exact to="/" className="blue" activeClassName="active">PageA</NavLink> | &nbsp;
    <NavLink exact to="/pageb/jack" activeClassName="active">PageB</NavLink> | &nbsp;
    <NavLink  to="/pagec" activeClassName="active">PageC</NavLink> | &nbsp;
    <NavLink  to="/redirect/" activeClassName="active">Redirect</NavLink>
  </div>
  ) 
}

export default NavBar