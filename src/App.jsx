import { useEffect } from 'react'
import './assets/css/adminlte.css'
import './assets/css/adminlte.min.css'
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LoginPage } from './components/common/LoginPage'
import { SignUpPage } from './components/common/SignUpPage'
import { HomePage } from './components/common/HomePage'
import { AdminSidebar } from './components/layouts/AdminSidebar'
import { AddHabit } from './components/user/AddHabit'
import { AddQuery } from './components/user/AddQuery'
import axios from 'axios'
import PrivateRoutes from './hooks/PrivateRoutes'
import { About } from './components/common/About'
import { AddReport } from './components/user/AddReport'
import { ViewReports } from './components/user/ViewReports'
import { UpdateHabit } from './components/user/UpdateHabit'
import { DisplayAllUsers } from './components/admin/DisplayAllUsers'
import { ResetPassword } from './components/common/ResetPassword'
import { ForgotPassword } from './components/common/ForgotPassword'
import { UserDashboard } from './components/user/UserDashboard'
import { DisplayAllReports } from './components/admin/DisplayAllReports'
import { DisplayAllHabits } from './components/admin/DisplayAllHabits'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { AdminLogin } from './components/admin/AdminLogin'
import { CounselorSidebar } from './components/Counselor/CounselorSidebar'
import { CounselorDashboard } from './components/Counselor/CounselorDashboard'
import { CounselorViewReports } from './components/Counselor/CounselorViewReports'

import { CounselorViewAllHabits } from './components/Counselor/CounselorViewAllHabits'
import { CounselorViewAllQueries } from './components/Counselor/CounselorViewAllQueries'
import { FeedbackForm } from './components/Counselor/FeedBackForm'



function App() {
  axios.defaults.baseURL = 'http://localhost:3000'
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/adminlogin" || location.pathname === "/signup" || location.pathname === "/" || location.pathname.startsWith("/resetPassword/") || location.pathname === "/forgotPassword" || location.pathname === "/about") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (

    <div className={
      location.pathname === "/login" || location.pathname === "/adminlogin" || location.pathname === "/signup" || location.pathname === "/" || location.pathname.startsWith("/resetPassword/") || location.pathname === "/forgotPassword" || location.pathname === "/about"
        ? ""
        : "app-wrapper"
    }>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/resetPassword/:token' element={<ResetPassword />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path='/user' element={<UserSidebar />}>
            <Route path='dashboard' element={<UserDashboard />}></Route>
            <Route path='habit' element={<AddHabit />}></Route>
            <Route path='query' element={<AddQuery />}></Route>
            <Route path='report' element={<AddReport />}></Route>
            <Route path='myReports' element={<ViewReports />}></Route>
            <Route path='updateHabit/:id' element={<UpdateHabit />}></Route>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminSidebar />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<DisplayAllUsers />} />
          <Route path="reports" element={<DisplayAllReports />} />
          <Route path="habits" element={<DisplayAllHabits />} />
        </Route>

        <Route path='/counselor' element={<CounselorSidebar />}>
          <Route path='dashboard' element={<CounselorDashboard />} />
          <Route path='report' element={<CounselorViewReports/>}/>
          <Route path='query' element={<CounselorViewAllQueries/>}/>
          <Route path='habit' element={<CounselorViewAllHabits/>}/>
          <Route path="feedback/:type/:id" element={<FeedbackForm />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
