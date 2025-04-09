import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hamburgermenu from "../../assets/images/hamburgermenu.png"

export const CounselorNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <nav className="app-header navbar navbar-expand">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <a
            className="nav-link btn btn-light"
            href="#"
            role="button"
            style={{
              color: "black",
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            onClick={toggleSidebar}><img src={hamburgermenu} style={{ height: "25px", width: "25px" }}></img></a>
          <li className="nav-item">
            <Link className="nav-link" to="#" role="button">
              <i className="bi bi-list" />
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link to="/counselor/dashboard" className="nav-link">Dashboard</Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout}>LOGOUT</button>
          </li>

        </ul>
      </div>
    </nav>
  )
}
