import React from 'react'
import '../../assets/css/adminlte.min.css'
import '../../assets/css/adminlte.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

export const SignUpPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate()

  const submitHandler = async(data) => {
    try{
      const res = await axios.post("/signup", data)
      if (res.status == 201) {
        toast.success('User Created Successfully', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClose : () => {
            navigate("/login")
          }
          });
      }
      else {
        console.log("User Not Created")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const validationSchema = {
    requiredValidator : {
      required : {
        value : true,
        message : "Required"
      }
    },
    numberValidator : {
      pattern : {
          value : /[6-9]{1}[0-9]{8}/,
          message : "Invalid Number"
      }
    }
  }
  return (
    <div className="register-page bg-dark">
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
      />
      <div className="register-box w-50">
        <div className="card bg-dark text-light border-primary-subtle card-primary p-3">
          <div className="card-header text-center">
            <h3 className='fw-bold text-uppercase text-info'>Registration Form</h3>
          </div>
          <div className="card-body bg-dark text-light register-card-body">
            <form onSubmit={handleSubmit(submitHandler)}>
              {/* First and Last Name */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="firstName" 
                      className="form-control form-control-lg text-primary" 
                      placeholder="First Name" 
                      {...register("firstName", validationSchema.requiredValidator)}
                    />
                    <span style={{ color: "red" }}>{errors.firstName?.message}</span>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="lastName" 
                      className="form-control form-control-lg text-primary" 
                      placeholder="Last Name" 
                      {...register("lastName", validationSchema.requiredValidator)}
                    />
                    <span style={{ color: "red" }}>{errors.lastName?.message}</span>
                  </div>
                </div>
              </div>

              {/* Phone Number & Gender */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="phoneNumber" 
                      className="form-control form-control-lg text-primary" 
                      placeholder="Phone Number" 
                      {...register("number", validationSchema.numberValidator)}
                    />
                    <span style={{ color: "red" }}>{errors.number?.message}</span>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <h6 className="mb-2 pb-1">Gender:</h6>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="inlineRadioOptions" 
                      id="maleGender" 
                      value="male" 
                      defaultChecked 
                      {...register("gender")}
                    />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="inlineRadioOptions" 
                      id="femaleGender" 
                      value="female" 
                      {...register("gender")}
                    />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="inlineRadioOptions" 
                      id="otherGender" 
                      value="other" 
                      {...register("gender")}
                    />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>
                </div>
              </div>

              {/* Email & Password */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input 
                      type="email" 
                      id="emailAddress" 
                      className="form-control form-control-lg text-primary" 
                      placeholder="Email" 
                      {...register("email", validationSchema.requiredValidator)}
                    />
                    <span style={{ color: "red" }}>{errors.email?.message}</span>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input 
                      type="password" 
                      id="password" 
                      className="form-control form-control-lg text-primary" 
                      placeholder="Password" 
                      {...register("password", validationSchema.requiredValidator)}
                    />
                    <span style={{ color: "red" }}>{errors.password?.message}</span>
                  </div>
                </div>
              </div>

              {/* Role Field */}
              <div className="row">
              <div className="col-md-6 offset-md-3 mb-4">
                  <div className="form-group">
                    <select className="form-control form-control-lg text-primary" {...register("roleId", validationSchema.requiredValidator)}>
                      <option value="" disabled selected>Choose Role</option>
                      <option value="67c315daa6a476c150fc2b1a">Youth</option>
                      <option value="67c315eea6a476c150fc2b1c">Parents</option>
                      <option value="67c3161fa6a476c150fc2b20">Teachers</option>
                      <option value="67c31601a6a476c150fc2b1e">Counselors</option>
                    </select>
                    <span style={{ color: "red" }}>{errors.roleId?.message}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-3 pt-2 text-center">
                <input 
                  type="submit" 
                  className="btn btn-outline-primary btn-lg btn-block" 
                  value="Register" 
                />
              </div>
            </form>
            <p className="mt-3 text-center">
                  Already have an account? <Link to="/login" style={{textDecoration : "none"}} className="text-info">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
