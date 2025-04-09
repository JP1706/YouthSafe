// File: src/components/counselor/CounselorDashboard.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CounselorDashboard = () => {
  const [queries, setQueries] = useState([]);
  const [reports, setReports] = useState([]);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await axios.get('/getQueries');
        setQueries(res.data.data);
      } catch (error) {
        toast.error("Error fetching queries", { theme: "dark", transition: Bounce });
      }
    };

    const fetchReports = async () => {
      try {
        const res = await axios.get('/getAllReports');
        setReports(res.data.data);
      } catch (error) {
        toast.error("Error fetching reports", { theme: "dark", transition: Bounce });
      }
    };

    const fetchHabits = async () => {
      try {
        const res = await axios.get('/getALLHabits');
        setHabits(res.data.data);
      } catch (error) {
        toast.error("Error fetching habits", { theme: "dark", transition: Bounce });
      }
    };

    fetchQueries();
    fetchReports();
    fetchHabits();
  }, []);

  return (
    <div className="bg-dark text-light p-4 min-vh-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
      {/* Header */}
      <h2 className="text-center mb-4">Counselor Dashboard</h2>

      {/* Section for Queries */}
      <section className="mb-4">
        <h3>Queries</h3>
        <div className="d-flex flex-wrap">
          {queries.map(q => (
            <div key={q._id} className="card bg-secondary text-light m-2" style={{ width: "18rem", cursor: "pointer" }}>
              <div className="card-body">
                <h5 className="card-title">{q.category}</h5>
                <p className="card-text" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {q.description}
                </p>
                <Link className="stretched-link text-light" to={`/counselor/feedback/query/${q._id}`}></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section for Reports */}
      <section className="mb-4">
        <h3>Reports</h3>
        <div className="d-flex flex-wrap">
          {reports.map(r => (
            <div key={r._id} className="card bg-secondary text-light m-2" style={{ width: "18rem", cursor: "pointer" }}>
              <div className="card-body">
                <h5 className="card-title">{r.incidentType}</h5>
                <p className="card-text" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.description}
                </p>
                <Link className="stretched-link text-light" to={`/counselor/feedback/report/${r._id}`}></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section for Habits */}
      <section className="mb-4">
        <h3>Habit Tracking</h3>
        <div className="d-flex flex-wrap">
          {habits.map(h => (
            <div key={h._id} className="card bg-secondary text-light m-2">
              <div className="card-body">
                <h5 className="card-title">Habit: {h.fullName}</h5>
                <p className="card-text" >
                  Screen Time: {h.screenTime} hrs, Sleep: {h.sleepHours} hrs
                </p>
                <Link className="stretched-link text-light" to={`/counselor/feedback/habit/${h._id}`}></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
