import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { FeedbackList } from './FeedbackList';

export const HabitFeedbackForm = () => {
  const { habitId } = useParams();
  const navigate = useNavigate();
const counselorId = localStorage.getItem('id');
const [habit, setHabit] = React.useState(null);

React.useEffect(() => {
  const fetchHabit = async () => {
    try {
      const res = await axios.get(`/habits/${habitId}`);
      setHabit(res.data.data);
    } catch {
      toast.error("Failed to load habit");
    }
  };
  fetchHabit();
}, [habitId]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitFeedback = async (data) => {
    try {
      if (!habit) return;
      const payload = {
        habitId,
        counselorId,
        feedbackText: data.feedbackText,
        userId: habit.userId
      };
      const res = await axios.post("/counselor/feedback/habit", payload);
      if (res.status === 201) {
        toast.success("Habit feedback submitted!", { theme: "dark", transition: Bounce });
        navigate('/counselor/habit');
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
            <h3 className="text-info">Habit Feedback</h3>
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
              <FeedbackList type="habit" itemId={habitId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};