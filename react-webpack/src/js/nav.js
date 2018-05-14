import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return(
    <div>
    <NavLink exact to="/">PageA</NavLink>
    <NavLink to="pageb">PageB</NavLink>
  </div>
  ) 
}

export default NavBar