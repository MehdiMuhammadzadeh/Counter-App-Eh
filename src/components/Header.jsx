import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">Counter</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className={navData => navData.isActive ?'nav-link active' : 'nav-link'} aria-current="page">Home</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header