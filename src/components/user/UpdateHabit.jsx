import React from 'react'
import '../../assets/css/adminlte.min.css'
import '../../assets/css/adminlte.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom'

export const UpdateHabit = () => {
    const id = useParams().id
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: async () => {
            const res = await axios.get("/getHabitsById/" + id)
            return res.data.data
        }
    })

    const validationSchema = {
        requiredValidator: {
            required: {
                value: true,
                message: "Required"
            }
        }
    }

    const submitHandler = async (data) => {
        try {
            data.userId = localStorage.getItem("id")
            delete data._id
            const res = await axios.put("/updateHabits/"+id, data)
            if (res.status === 201) {
                toast.success('Habit Updated Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
            else {
                console.log("Habit Not Updated")
            }
        }
        catch (err) {
            console.log(err)
        }


    }
    return (
        <div className="register-page bg-dark d-flex align-items-center justify-content-center">
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
            <div className="register-box w-50 p-4">
                <div className="card bg-dark text-light border-primary-subtle card-primary p-4 mt-5">
                    <div className="card-header text-center">
                        <h3 className="text-info">Update Habits</h3>
                    </div>
                    <div className="card-body register-card-body">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg text-primary"
                                    placeholder="Full Name"
                                    required
                                    {...register("fullName", validationSchema.requiredValidator)}
                                />
                                <span style={{ color: "red" }}>{errors.fullName?.message}</span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-secondary">Daily Screen Time (hours)</label>
                                <input
                                    type="number"
                                    className="form-control form-control-lg text-primary"
                                    placeholder="e.g. 3"
                                    required
                                    {...register("screenTime", validationSchema.requiredValidator)}
                                />
                                <span style={{ color: "red" }}>{errors.screenTime?.message}</span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-secondary d-block">Social Media Usage Frequency</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="socialMediaUsage"
                                        id="usageRarely"
                                        value="rarely"
                                        defaultChecked
                                        {...register("socialMediaUsage")}
                                    />
                                    <label className="form-check-label text-primary" htmlFor="usageRarely">Rarely</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="socialMediaUsage"
                                        id="usageOccasionally"
                                        value="occasionally"
                                        {...register("socialMediaUsage")}
                                    />
                                    <label className="form-check-label text-primary" htmlFor="usageOccasionally">Occasionally</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="socialMediaUsage"
                                        id="usageFrequently"
                                        value="frequently"
                                        {...register("socialMediaUsage")}
                                    />
                                    <label className="form-check-label text-primary" htmlFor="usageFrequently">Frequently</label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-secondary">Average Hours of Sleep</label>
                                <input
                                    type="number"
                                    className="form-control form-control-lg text-primary"
                                    placeholder="e.g. 7"
                                    required
                                    {...register("sleepHours", validationSchema.requiredValidator)}
                                />
                                <span style={{ color: "red" }}>{errors.sleepHours?.message}</span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-secondary d-block">Physical Activity Level</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="physicalActivity"
                                        id="activitySedentary"
                                        value="sedentary"
                                        defaultChecked
                                        {...register("physicalActivity")}
                                    />
                                    <label className="form-check-label text-primary" htmlFor="activitySedentary">Sedentary</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="physicalActivity"
                                        id="activityModerate"
                                        value="moderate"
                                        {...register("physicalActivity")}
                                    />
                                    <label className="form-check-label text-primary" htmlFor="activityModerate">Moderate</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="physicalActivity"
                                        id="activityActive"
                                        value="active"
                                        {...register("physicalActivity")}
                                    />
                                    <label className="form-check-label text-primary" htmlFor="activityActive">Active</label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <textarea
                                    className="form-control form-control-lg text-primary"
                                    rows="3"
                                    placeholder="Additional comments"
                                    {...register("additionalComments")}
                                ></textarea>
                                <span style={{ color: "red" }}>{errors.addtionalComments?.message}</span>
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-outline-primary btn-lg">
                                    Submit Habits
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
