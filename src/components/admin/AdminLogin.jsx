// File: src/components/admin/AdminLogin.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('/admin/login', data);
      if (res.status === 200) {
        localStorage.setItem('adminToken', res.data.token);
        toast.success('Admin Login Successful', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          transition: Bounce,
          theme: "dark"
        });
        navigate('/admin');
      } else {
        toast.error('Invalid Credentials', { position: "top-center", theme: "dark" });
      }
    } catch (err) {
      toast.error(`Login Failed: ${err.response?.data?.message || err.message}`, {
        position: "top-center",
        theme: "dark",
        transition: Bounce
      });
    }
  };

  return (
    <div className="admin-login-page bg-dark d-flex align-items-center justify-content-center min-vh-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
      <div className="admin-login-box w-50 p-5">
        <div className="card bg-dark text-light border-primary-subtle card-primary p-5">
          <div className="card-header text-center">
            <h3 className="text-info">Admin Login</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg text-primary"
                  placeholder="Admin Username"
                  {...register("username", { required: "Username is required" })}
                />
                {errors.username && <span className="text-danger">{errors.username.message}</span>}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg text-primary"
                  placeholder="Password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span className="text-danger">{errors.password.message}</span>}
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-outline-primary btn-lg">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
