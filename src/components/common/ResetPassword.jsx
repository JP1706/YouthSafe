import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { data, useParams } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'

export const ResetPassword = () => {
  const token = useParams().token
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = async(data) => {
      const obj = {
        token : token,
        password: data.password
      }

      const res = await axios.post("/resetPassword", obj)
      console.log(res.data.data)
  }
  return (
    <div className="reset-Password bg-dark">
      {/* <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} /> */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-sm-10">
            <div className="card p-4 bg-dark text-light border-primary-subtle shadow-lg">
              <div className="card-header text-center">
                <h3 className="fw-bold text-uppercase text-info">Reset Password</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control text-primary"
                      placeholder="Password"
                      {...register("password", { required: "Required" })}
                    />
                    <span className="text-danger">{errors.password?.message}</span>
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" className="btn btn-outline-primary btn-lg">Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
