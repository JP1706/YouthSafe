import React from 'react'
import { Link } from 'react-router-dom'

export const UserNavbar = () => {
  return (
    <nav className="app-header navbar navbar-expand">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="#" role="button">
              <i className="bi bi-list" />
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link to="/user/dashboard" className="nav-link">Dashboard</Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown user-menu">
            <Link to="#" className="nav-link dropdown-toggle">
              <img src="../../dist/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User" />
              <span className="d-none d-md-inline">User</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <li className="user-footer">
                <Link to="/user/profile" className="btn btn-default btn-flat">Profile</Link>
                <Link to="/logout" className="btn btn-danger btn-flat float-end">Sign out</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
