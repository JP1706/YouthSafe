// src/components/layouts/AdminSidebar.jsx
import React, { useState } from 'react';
import { AdminNavbar } from './AdminNavbar';
import { Link, Outlet } from 'react-router-dom';
import logo from "../../assets/images/Mindguard-Logo.png";

export const AdminSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <aside
        className={`app-sidebar bg-body-secondary shadow ${isSidebarOpen ? "open" : "d-none"}`}
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          <Link to="/admin/dashboard" className="brand-link">
            <img
              src={logo}
              alt="Admin Logo"
              className="brand-image opacity-75 shadow"
            />
            <span className="brand-text fw-light">Admin Panel</span>
          </Link>
        </div>
        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column">
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link">
                <i className="nav-icon bi bi-people" />
                <p>Users</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/reports" className="nav-link">
                <i className="nav-icon bi bi-file-earmark-text" />
                <p>Reports</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/habits" className="nav-link">
                <i className="nav-icon bi bi-graph-up" />
                <p>Habits</p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
};
