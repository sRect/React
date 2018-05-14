import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return(
    <div>
    <NavLink exact to="/">PageA</NavLink> | &nbsp;
    <NavLink exact to="pageb">PageB</NavLink>
  </div>
  ) 
}

export default NavBar