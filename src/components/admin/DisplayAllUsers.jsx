// import { DataGrid } from '@mui/x-data-grid'
// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// export const DisplayAllUsers = () => {
//   const columns = [
//     { field: "_id", headerName: "ID", width: 90 },
//     { field: "firstName", headerName: "First Name", width: 150 },
//     { field: "lastName", headerName: "Last Name", width: 150 },
//     { field: "email", headerName: "Email", width: 150 },
//     { field: "Number", headerName: "Number", width: 150 },
//     { field: "roleId", headerName: "Role", width: 150 }
//   ]
//   const [users, setusers] = useState([])

//   const getAllUsers = async () => {
//     const res = await axios.get("/getUser")
//     setusers(res.data.data)
//   }

//   useEffect(() => {
//     getAllUsers()
//   }, [])

//   return (
//     <div>
//       <DataGrid
//         rows={users}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         getRowId={(row) => row._id}>
//       </DataGrid>
//     </div>
//   )
// }

// File: src/components/admin/DisplayAllUsers.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DisplayAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/admin/users');
        setUsers(res.data.data);
      } catch (error) {
        toast.error("Error fetching users", { position: "top-center", theme: "dark", transition: Bounce });
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'fullName', headerName: 'Full Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'roleId', headerName: 'Role', width: 150 },
    { field: 'createdAt', headerName: 'Created At', width: 200 },
  ];

  // Map each user to a row, using _id as unique identifier.
  const rows = users.map(user => ({
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    roleId: user.roleId,
    createdAt: new Date(user.createdAt).toLocaleString(),
  }));

  return (
    <div className="bg-dark text-light p-4">
      <h2>Manage Users</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
    </div>
  );
};

