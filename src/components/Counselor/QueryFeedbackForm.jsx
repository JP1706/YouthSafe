import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { FeedbackList } from './FeedbackList';

export const QueryFeedbackForm = () => {
  const { queryId } = useParams();
  const navigate = useNavigate();
const counselorId = localStorage.getItem('id');
const [query, setQuery] = React.useState(null);

useEffect(() => {
  const fetchQuery = async () => {
    try {
      const res = await axios.get(`/queries/${queryId}`);
      setQuery(res.data.data);
    } catch {
      toast.error("Failed to load query");
    }
  };
  fetchQuery();
}, [queryId]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitFeedback = async (data) => {
    try {
      if (!query) return;
      const payload = {
        queryId,
        counselorId,
        feedbackText: data.feedbackText,
        userId: query.userId
      };
      const res = await axios.post("/counselor/feedback/query", payload);
      if (res.status === 201) {
        toast.success("Query feedback submitted!", { theme: "dark", transition: Bounce });
        navigate('/counselor/dashboard');
      }
    } catch (error) {
      toast.error("Submission failed", { theme: "dark" });
    }
  };

  return (
    <div className="register-page bg-dark d-flex align-items-center justify-content-center min-vh-100">
      <ToastContainer />
      <div className="register-box w-50 p-4">
        <div className="card bg-dark text-light border-primary-subtle card-primary p-4">
          <div className="card-header text-center">
            <h3 className="text-info">Query Feedback</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(submitFeedback)}>
              <div className="mb-3">
                <textarea
                  className="form-control form-control-lg text-primary"
                  placeholder="Enter feedback..."
                  rows="6"
                  {...register("feedbackText", { required: "Feedback is required" })}
                ></textarea>
                <span className="text-danger">{errors.feedbackText?.message}</span>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-primary btn-lg" type="submit">Submit</button>
              </div>
            </form>

            <div className="mt-4">
              <FeedbackList type="query" itemId={queryId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};