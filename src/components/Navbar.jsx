import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-center gap-4 text-white p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pastes">Pastes</NavLink>
    </nav>
  )
}

export default Navbar