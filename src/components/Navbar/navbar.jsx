import React from 'react'
import Link from 'gatsby-link'

const Navbar = ({links}) => (
  <div className="navbar">
    <Link className="navbar-link" to="/">Home</Link>
    <Link className="navbar-link" to="/gallery/">Gallery</Link>
    <Link className="navbar-link" to="/about/">About Me</Link>
    <Link className="navbar-link" to="/">Contact</Link>
  </div>
)

export default Navbar