import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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


function App() {
  axios.defaults.baseURL = 'http://localhost:3000'
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (

    <div className={
      location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/"
        ? ""
        : "app-wrapper"
    }>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          {/* Private Routes */}
          <Route element={<PrivateRoutes/>}>
          <Route path='/user' element={<UserSidebar/>}>
            <Route path='habit' element={<AddHabit/>}></Route>
            <Route path='query' element={<AddQuery/>}></Route>
            <Route path='report' element={<AddReport/>}></Route>
            <Route path='myReports' element={<ViewReports/>}></Route>
            <Route path='updateHabit/:id' element={<UpdateHabit/>}></Route>
          </Route>
          </Route>
          <Route path='/admin' element={<AdminSidebar/>}>
          </Route>
        </Routes>
    </div>
  )
}

export default App
