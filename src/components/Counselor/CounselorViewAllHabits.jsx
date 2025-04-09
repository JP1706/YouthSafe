import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CounselorViewAllHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const res = await axios.get('/getAllHabits');
        setHabits(res.data.data);
      } catch (error) {
        toast.error("Error fetching habits", { theme: "dark", transition: Bounce });
      }
    };
    fetchHabits();
  }, []);

  return (
    <div className="bg-dark text-light p-4 min-vh-100">
      <h2 className="text-center mb-4">User Habit Tracking</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {habits.map((h) => (
          <div key={h._id} className="card bg-secondary text-light m-3 shadow" style={{ width: "20rem", borderRadius: "0.75rem", overflow: "hidden", transition: "transform 0.2s", cursor: "pointer" }}>
            <div className="card-body">
              <h4 className="card-title mb-3">{h.fullName}</h4>
              <ul className="list-group list-group-flush mb-3 bg-transparent">
                <li className="list-group-item bg-transparent text-light d-flex justify-content-between">
                  <span>📱 Screen Time:</span> <span>{h.screenTime} hrs</span>
                </li>
                <li className="list-group-item bg-transparent text-light d-flex justify-content-between">
                  <span>🛌 Sleep:</span> <span>{h.sleepHours} hrs</span>
                </li>
              </ul>
              <Link 
                className="btn btn-outline-light btn-sm w-100 mt-2" 
                to={`/counselor/feedback/habit/${h._id}`}>
                Give Feedback
              </Link>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
    </div>
  );
};
