import React from 'react';
import '../../assets/css/adminlte.min.css';
import '../../assets/css/adminlte.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export const AddReport = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {
        data.userId = localStorage.getItem("id")
        const formData = new FormData()
        formData.append("fullName", data.fullName)
        formData.append("incidentType", data.incidentType)
        formData.append("description", data.description)
        formData.append("image", data.image[0])
        formData.append("userId", data.userId)
        try {
            const res = await axios.post("/addReport", formData)

            if (res.status === 201) {
                toast.success('Report Submitted Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })
            }
            else {
                console.log("Report Submission Failed")
            }
        }
        catch (err) {
                console.log(err)
        }


    };

    return (
        <div className="register-page bg-dark d-flex align-items-center justify-content-center">
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
            <div className="register-box w-50 p-4">
                <div className="card bg-dark text-light border-primary-subtle card-primary p-4">
                    <div className="card-header text-center">
                        <h3 className="text-info">Add Report</h3>
                    </div>
                    <div className="card-body register-card-body">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg text-primary"
                                    placeholder="Full Name"
                                    required
                                    {...register("fullName", { required: "Full Name is required" })}
                                />
                                <span style={{ color: "red" }}>{errors.fullName?.message}</span>
                            </div>
                            <div className="mb-3">
                                <select className="form-control form-control-lg text-primary" required {...register("incidentType")}>
                                    <option value="" disabled selected>Select Incident Type</option>
                                    <option value="Harassment">Harassment</option>
                                    <option value="CyberBullying">Cyberbullying</option>
                                    <option value="Violence">Violence</option>
                                    <option value="Discrimination">Discrimination</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control form-control-lg text-primary"
                                    rows="4"
                                    placeholder="Describe the incident"
                                    required
                                    {...register("description")}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-secondary">Upload Image of Perpetrator (if available)</label>
                                <input
                                    type="file"
                                    className="form-control form-control-lg text-primary"
                                    accept="image/*"
                                    {...register("image")}
                                />
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-outline-primary btn-lg">
                                    Submit Report
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
