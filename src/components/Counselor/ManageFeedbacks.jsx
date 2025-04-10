import React, { useEffect, useState } from 'react';
import {FeedbackList} from './FeedbackList';
import axios from 'axios';

export const ManageFeedbacks = () => {
  const [habitIds, setHabitIds] = useState([]);
  const [queryIds, setQueryIds] = useState([]);
  const [reportIds, setReportIds] = useState([]);
  const counselor = JSON.parse(localStorage.getItem('counselor'));

  useEffect(() => {
    // Load IDs of submitted feedbacks by this counselor
    const fetchAll = async () => {
      const [habitRes, queryRes, reportRes] = await Promise.all([
        axios.get("/feedback/habit/all"),
        axios.get("/feedback/query/all"),
        axios.get("/feedback/report/all"),
      ]);

      setHabitIds(habitRes.data.data.filter(f => f.counselorId === counselor._id).map(f => f.habitId));
      setQueryIds(queryRes.data.data.filter(f => f.counselorId === counselor._id).map(f => f.queryId));
      setReportIds(reportRes.data.data.filter(f => f.counselorId === counselor._id).map(f => f.reportId));
    };

    fetchAll();
  }, [counselor._id]);

  return (
    <div className='content-wrapper bg-dark text-light p-4'>
      <h2 className="text-center text-info mb-4">Manage Submitted Feedbacks</h2>

      {/* Habit Section */}
      <div className="mb-5">
        <h4 className="text-primary">🧠 Habit Feedback</h4>
        {habitIds.map(id => (
          <FeedbackList key={id} type="habit" itemId={id} />
        ))}
      </div>

      {/* Query Section */}
      <div className="mb-5">
        <h4 className="text-primary">❓ Query Feedback</h4>
        {queryIds.map(id => (
          <FeedbackList key={id} type="query" itemId={id} />
        ))}
      </div>

      {/* Report Section */}
      <div className="mb-5">
        <h4 className="text-primary">🚨 Report Feedback</h4>
        {reportIds.map(id => (
          <FeedbackList key={id} type="report" itemId={id} />
        ))}
      </div>
    </div>
  );
};

