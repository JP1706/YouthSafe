import React, { useState } from 'react'
import { UserNavbar } from './UserNavbar'
import { Link, Outlet } from 'react-router-dom'
import { UserDashboard } from '../user/UserDashboard'
import logo from "../../assets/images/Mindguard-Logo.png"

export const UserSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <UserNavbar toggleSidebar={toggleSidebar} />
      {/* <UserDashboard/> */}
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
            <li className="nav-item">
              <Link to={`/user/updateHabit/${localStorage.getItem("id")}`} className="nav-link">
                <i className="nav-icon bi bi-heart" />
                <p>Update Habits</p>
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
