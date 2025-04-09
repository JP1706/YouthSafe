import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FeedbackForm = () => {
  const { type, id } = useParams(); // type: "habit", "report", or "query"
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const feedbackPayload = {
        ...data,
        reportId: id, // assuming type === 'report'
      };
      const res = await axios.post("/counselor/feedback", feedbackPayload);
      if (res.status === 201) {
        toast.success("Feedback submitted successfully", { theme: "dark", position: "top-center", transition: Bounce });
        navigate("/counselor");
      }
    } catch (error) {
      toast.error(`Error submitting feedback: ${error.response?.data.message || error.message}`, {
        theme: "dark",
        position: "top-center",
        transition: Bounce
      });
    }
  };

  return (
    <div className="bg-dark text-light d-flex align-items-center justify-content-center min-vh-100 p-4">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
      <div className="feedback-form-box w-50 p-5">
        <div className="card bg-dark text-light border-primary-subtle card-primary p-4">
          <div className="card-header text-center">
            <h3 className="text-info">Provide Feedback</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label text-light">Counselor Notes</label>
                <textarea 
                  className="form-control form-control-lg text-primary" 
                  rows="5" 
                  placeholder="Enter your notes" 
                  {...register("notes", { required: "Notes are required" })}
                ></textarea>
                {errors.notes && <span className="text-danger">{errors.notes.message}</span>}
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Recommendation (optional)</label>
                <input 
                  type="text"
                  className="form-control form-control-lg text-primary"
                  placeholder="Any recommendation"
                  {...register("recommendation")}
                />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-outline-primary btn-lg">Submit Feedback</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
