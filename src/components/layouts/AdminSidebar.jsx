// File: src/components/admin/AdminSidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Mindguard-Logo.png"


export const AdminSidebar = () => {
  return (
    <aside className="app-sidebar bg-dark text-light p-3" style={{ minWidth: '250px', minHeight: '100vh' }}>
      <div className="sidebar-brand text-center mb-4">
        <Link to="/" className="brand-link text-light">
          <img src={logo} alt="YouthSafe Logo" className="brand-image opacity-75 shadow" style={{ maxWidth: '80px' }} />
          <span className="brand-text text-light fw-light">YouthSafe Admin</span>
        </Link>
      </div>
      <nav className="mt-2">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/users" className="nav-link text-light">
              <i className="nav-icon fas fa-users"></i> <span>Manage Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/reports" className="nav-link text-light">
              <i className="nav-icon fas fa-flag"></i> <span>Review Reports</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/habits" className="nav-link text-light">
              <i className="nav-icon fas fa-chart-bar"></i> <span>Track Habits</span>
            </Link>
          </li>
          {/* You can add more admin links here */}
        </ul>
      </nav>
    </aside>
  );
};

