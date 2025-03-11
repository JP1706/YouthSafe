import React from 'react'
import { Link } from 'react-router-dom'

export const AdminNavbar = () => {
  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid">
        {/* Sidebar Toggle */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="#" role="button">
              <i className="bi bi-list" />
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
          </li>
        </ul>

        {/* Right Navbar */}
        <ul className="navbar-nav ms-auto">
          {/* Notifications */}
          <li className="nav-item dropdown">
            <Link className="nav-link" to="#">
              <i className="bi bi-bell-fill" />
              <span className="navbar-badge badge text-bg-warning">5</span>
            </Link>
          </li>

          {/* User Menu */}
          <li className="nav-item dropdown user-menu">
            <Link to="#" className="nav-link dropdown-toggle">
              <img src="../../dist/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="Admin" />
              <span className="d-none d-md-inline">Admin</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <li className="user-header text-bg-primary">
                <img src="../../dist/assets/img/user2-160x160.jpg" className="rounded-circle shadow" alt="Admin" />
                <p>Admin - YouthSafe Manager</p>
              </li>
              <li className="user-footer">
                <Link to="/admin/profile" className="btn btn-default btn-flat">Profile</Link>
                <Link to="/logout" className="btn btn-danger btn-flat float-end">Sign out</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
