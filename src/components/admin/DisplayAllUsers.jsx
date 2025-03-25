import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const DisplayAllUsers = () => {
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "Number", headerName: "Number", width: 150 },
    { field: "roleId", headerName: "Role", width: 150 }
  ]
  const [users, setusers] = useState([])

  const getAllUsers = async () => {
    const res = await axios.get("/getUser")
    setusers(res.data.data)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}>
      </DataGrid>
    </div>
  )
}
