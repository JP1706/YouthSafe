import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const FeedbackList = ({ type, itemId }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { register, handleSubmit, setValue, reset } = useForm();

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`/feedback/${type}/${itemId}`);
      setFeedbacks(res.data.data);
    } catch (err) {
      toast.error("Failed to load feedback", { theme: "dark", transition: Bounce });
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [itemId, type]);

  const handleEdit = (feedback) => {
    setEditingId(feedback._id);
    setValue('feedbackText', feedback.feedbackText);
  };

  const submitUpdate = async (data) => {
    try {
      await axios.put(`/feedback/${type}/${editingId}`, { feedbackText: data.feedbackText });
      toast.success("Feedback updated", { theme: "dark", transition: Bounce });
      setEditingId(null);
      reset();
      fetchFeedbacks();
    } catch (err) {
      toast.error("Update failed", { theme: "dark" });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;
    try {
      await axios.delete(`/feedback/${type}/${id}`);
      toast.success("Feedback deleted", { theme: "dark" });
      fetchFeedbacks();
    } catch (err) {
      toast.error("Deletion failed", { theme: "dark" });
    }
  };

  return (
    <div className="mt-4">
      <ToastContainer theme="dark" />
      <h5 className="text-info">Submitted Feedback</h5>

      {feedbacks.map((fb) => (
        <div key={fb._id} className="card bg-secondary text-light my-2 p-3">
          {editingId === fb._id ? (
            <form onSubmit={handleSubmit(submitUpdate)}>
              <textarea
                {...register("feedbackText", { required: true })}
                className="form-control text-primary mb-2"
                rows="3"
              ></textarea>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-success" type="submit">Update</button>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            </form>
          ) : (
            <>
              <p>{fb.feedbackText}</p>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-sm btn-outline-warning" onClick={() => handleEdit(fb)}>Edit</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(fb._id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

