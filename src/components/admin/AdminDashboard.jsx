// File: src/components/admin/AdminDashboard.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';

import { AdminNavbar } from '../layouts/AdminNavbar';
import { AdminSidebar } from '../layouts/AdminSidebar';


const AdminDashboard = () => {
  return (
    <div className="admin-wrapper">
      <AdminNavbar />
      <div className="d-flex">
        <AdminSidebar />
        <main className="admin-content flex-grow-1 p-4">
          <h2 className="text-light">Admin Dashboard</h2>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
