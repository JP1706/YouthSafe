// File: src/components/admin/DisplayAllReports.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer, toast, Bounce } from 'react-toastify';

export const DisplayAllReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get('/admin/reports');
        setReports(res.data.data);
      } catch (error) {
        toast.error("Error fetching reports", { position: "top-center", theme: "dark", transition: Bounce });
      }
    };
    fetchReports();
  }, []);

  const columns = [
    { field: 'id', headerName: 'Report ID', width: 250 },
    { field: 'userId', headerName: 'User ID', width: 250 },
    { field: 'fullName', headerName: 'User Name', width: 200 },
    { field: 'incidentType', headerName: 'Incident Type', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'createdAt', headerName: 'Created At', width: 200 },
  ];

  const rows = reports.map(report => ({
    id: report._id,
    userId: report.userId,
    fullName: report.fullName,
    incidentType: report.incidentType,
    description: report.description,
    createdAt: new Date(report.createdAt).toLocaleString(),
  }));

  return (
    <div className="bg-dark text-light p-4">
      <h2>Review Reports</h2>
      <div style={{ height: 400, width: '100%' }}>
         <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
    </div>
  );
};
