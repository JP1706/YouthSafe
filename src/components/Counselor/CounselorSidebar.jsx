import React, { useState } from 'react'
import { CounselorNavbar } from './CounselorNavbar'
import { Link, Outlet } from 'react-router-dom'
import { UserDashboard } from '../user/UserDashboard'
import logo from "../../assets/images/Mindguard-Logo.png"

export const CounselorSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <CounselorNavbar toggleSidebar={toggleSidebar} />
      <aside className={`app-sidebar bg-body-secondary shadow ${isSidebarOpen ? "open" : "d-none"}`} data-bs-theme="dark">
        <div className="sidebar-brand">
          <Link to="/" className="brand-link">
            <img src={logo} alt="YouthSafe Logo" className="brand-image opacity-75 shadow" />
            <span className="brand-text fw-light">YouthSafe</span>
          </Link>
        </div>

        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column">
            <li className="nav-item">
              <Link to='/counselor/query' className="nav-link">
                <i className="nav-icon bi bi-question-circle" />
                <p>View Queries</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/counselor/habit' className="nav-link">
                <i className="nav-icon bi bi-heart" />
                <p>View Habits</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/counselor/report' className="nav-link">
                <i className="nav-icon bi bi-heart" />
                <p>View Report</p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className='app-main'>
        <Outlet />
      </main>
    </>
  )
}
