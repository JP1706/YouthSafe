import React from 'react'
import '../../assets/css/adminlte.min.css'
import '../../assets/css/adminlte.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const AddQuery = () => {
  const {register, handleSubmit, formState: {errors}}= useForm()

  const submitHandler =  async (data) => {
    const userId = localStorage.getItem("id")
    data.userId = userId
    console.log(data)
    const res = await axios.post("/addQuery", data)
    console.log(res.data)
  }
  return (
    <div className="register-page bg-dark d-flex align-items-center justify-content-center vh-100">
      <div className="register-box w-50 p-4">
        <div className="card bg-dark text-light border-primary-subtle card-primary p-4">
          <div className="card-header text-center">
            <h3 className="text-info">User Query Form</h3>
          </div>
          <div className="card-body register-card-body">
            <form onSubmit={handleSubmit(submitHandler)}>
              {/* <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control form-control-lg text-primary" 
                  placeholder="Full Name" 
                  required 
                  {...register("")}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-lg text-primary" 
                  placeholder="Email" 
                  required 
                />
              </div> */}
              <div className="mb-3">
                <select className="form-control form-control-lg text-primary" required {...register("category")}>
                  <option value="" disabled selected>Select Query Category</option>
                  <option value="Cyberbullying">Cyberbullying</option>
                  <option value="Mental Health Concerns">Mental Health</option>
                  <option value="Online Safety Issues">Online Safety</option>
                  <option value="Peer Pressure">Peer Pressure</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control form-control-lg text-primary" 
                  rows="4" 
                  placeholder="Describe your query" 
                  required
                  {...register("description")}
                ></textarea>
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-outline-primary btn-lg">
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
