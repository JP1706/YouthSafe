import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UserFeedbackPanel = () => {
  const userId = localStorage.getItem("id");
  const [habitFeedbacks, setHabitFeedbacks] = useState([]);
  const [queryFeedbacks, setQueryFeedbacks] = useState([]);
  const [reportFeedbacks, setReportFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const habitRes = await axios.get(`/user/feedback/habit/${userId}`);
        const queryRes = await axios.get(`/user/feedback/query/${userId}`);
        const reportRes = await axios.get(`/user/feedback/report/${userId}`);

        setHabitFeedbacks(habitRes.data.data || []);
        setQueryFeedbacks(queryRes.data.data || []);
        setReportFeedbacks(reportRes.data.data || []);
      } catch (err) {
        console.error("Error fetching feedback", err);
      }
    };

    fetchFeedbacks();
  }, [userId]);

  const renderCards = (feedbacks, title, icon) => (
    <div className="mb-4">
      <h4 className="text-info mb-3">{icon} {title}</h4>
      <div className="row">
        {feedbacks.length === 0 ? (
          <p className="text-secondary">No feedback yet.</p>
        ) : feedbacks.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card bg-dark text-light border border-primary shadow-sm">
              <div className="card-body">
                <h6 className="text-info">Counselor Feedback</h6>
                <hr className="bg-primary" />
                <p className="card-text text-secondary">{item.feedbackText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="content-wrapper bg-dark text-light p-4">
      <h2 className="text-center text-info mb-4">Feedback from Counselor</h2>
      {renderCards(habitFeedbacks, "Habit Feedback", "🧠")}
      {renderCards(queryFeedbacks, "Query Feedback", "❓")}
      {renderCards(reportFeedbacks, "Report Feedback", "🚨")}
    </div>
  );
};