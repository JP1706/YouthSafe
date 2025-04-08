// File: src/components/admin/AdminNavbar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  return (
    <nav className="app-header navbar navbar-expand bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item d-none d-md-block">
            <Link to="/admin" className="nav-link text-light">Dashboard</Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout}>LOGOUT</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

