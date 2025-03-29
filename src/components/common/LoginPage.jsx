import React from 'react'
import '../../assets/css/adminlte.min.css'
import '../../assets/css/adminlte.css'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const submitHandler = async (data) => {
    try {
      const res = await axios.post("/login", data)
      if (res.status === 201) {
        localStorage.setItem("id", res.data.data._id)
        localStorage.setItem("role", res.data.data.roleId.name)
        toast.success('Login Successful', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          theme: "dark",
          transition: Bounce,
          onClose: () => {
            if (res.data.data.roleId.name === "Youth") {
              navigate("/user/dashboard")
            }
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login-page bg-dark d-flex align-items-center justify-content-center min-vh-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-sm-10">
            <div className="card p-4 bg-dark text-light border-primary-subtle shadow-lg">
              <div className="card-header text-center">
                <h3 className="fw-bold text-uppercase text-info">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control text-primary" 
                      placeholder="Email"
                      {...register("email", { required: "Required" })} 
                    />
                    <span className="text-danger">{errors.email?.message}</span>
                  </div>
                  <div className="mb-3">
                    <input 
                      type="password" 
                      className="form-control text-primary" 
                      placeholder="Password"
                      {...register("password", { required: "Required" })} 
                    />
                    <span className="text-danger">{errors.password?.message}</span>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary btn-lg">Login</button>
                  </div>
                </form>
                <p className="mt-3 text-center">
                  <Link to="/forgotPassword" style={{textDecoration : "none"}} className="text-info">Forgot password?</Link>
                </p>
                <p className="text-center">
                  Don't have an account? <Link to="/signup" style={{textDecoration : "none"}} className="text-info">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
