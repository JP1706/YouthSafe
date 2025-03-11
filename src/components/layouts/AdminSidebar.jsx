import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AdminNavbar } from './AdminNavbar'

export const AdminSidebar = () => {
  return (
    <>
      <body className="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
        <div className='app-wrapper'>
          <AdminNavbar/>
          <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
            <div className="sidebar-brand">
              <Link to="/" className="brand-link">
                <img src="src/assets/images/Mindguard-Logo.png" alt="YouthSafe Logo" className="brand-image opacity-75 shadow" />
                <span className="brand-text fw-light">YouthSafe Admin</span>
              </Link>
            </div>

            <nav className="mt-2">
              <ul className="nav sidebar-menu flex-column">
                <li className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link active">
                    <i className="nav-icon bi bi-speedometer" />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/manage-users" className="nav-link">
                    <i className="nav-icon bi bi-people-fill" />
                    <p>Manage Users</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/reports" className="nav-link">
                    <i className="nav-icon bi bi-flag-fill" />
                    <p>Review Reports</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className='app-main'>
            <Outlet/>
          </main>
        </div>
      </body>
    </>
  )
}
