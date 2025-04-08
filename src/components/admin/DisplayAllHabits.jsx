// File: src/components/admin/DisplayAllHabits.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer, toast, Bounce } from 'react-toastify';

export const DisplayAllHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const res = await axios.get('/admin/habits');
        setHabits(res.data.data);
      } catch (error) {
        toast.error("Error fetching habits", { position: "top-center", theme: "dark", transition: Bounce });
      }
    };
    fetchHabits();
  }, []);

  const columns = [
    { field: 'id', headerName: 'Habit ID', width: 250 },
    { field: 'userId', headerName: 'User ID', width: 250 },
    { field: 'fullName', headerName: 'User Name', width: 200 },
    { field: 'screenTime', headerName: 'Screen Time (hrs)', width: 180 },
    { field: 'sleepHours', headerName: 'Sleep Hours', width: 160 },
    { field: 'socialMediaUsage', headerName: 'Social Media Usage', width: 200 },
    { field: 'physicalActivity', headerName: 'Physical Activity', width: 180 },
    { field: 'createdAt', headerName: 'Recorded At', width: 200 },
  ];

  const rows = habits.map(habit => ({
    id: habit._id,
    userId: habit.userId,
    fullName: habit.fullName,
    screenTime: habit.screenTime,
    sleepHours: habit.sleepHours,
    socialMediaUsage: habit.socialMediaUsage,
    physicalActivity: habit.physicalActivity,
    createdAt: new Date(habit.createdAt).toLocaleString(),
  }));

  return (
    <div className="bg-dark text-light p-4">
      <h2>Track Habits</h2>
      <div style={{ height: 400, width: '100%' }}>
         <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
    </div>
  );
};
