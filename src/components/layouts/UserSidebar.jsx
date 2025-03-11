import React from 'react'
import { UserNavbar } from './UserNavbar'
import { Link, Outlet } from 'react-router-dom'
import { UserDashboard } from '../user/UserDashboard'

export const UserSidebar = () => {
  return (
    <>
      <body className="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
        <div className='app-wrapper'>
          <UserNavbar/>
          {/* <UserDashboard/> */}
          <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
            <div className="sidebar-brand">
              <Link to="/" className="brand-link">
                <img src="src/assets/images/Mindguard-Logo.png" alt="YouthSafe Logo" className="brand-image opacity-75 shadow" />
                <span className="brand-text fw-light">YouthSafe</span>
              </Link>
            </div>

            <nav className="mt-2">
              <ul className="nav sidebar-menu flex-column">
                <li className="nav-item">
                  <Link to='/user/query' className="nav-link">
                    <i className="nav-icon bi bi-question-circle" />
                    <p>Submit Query</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/user/habit' className="nav-link">
                    <i className="nav-icon bi bi-heart" />
                    <p>Track Habits</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/user/report' className="nav-link">
                    <i className="nav-icon bi bi-heart" />
                    <p>File Report</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/user/myReports' className="nav-link">
                    <i className="nav-icon bi bi-heart" />
                    <p>View Reports</p>
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
