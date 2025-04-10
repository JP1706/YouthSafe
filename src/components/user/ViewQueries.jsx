import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewQueries = () => {
  const userId = localStorage.getItem("id");
  const [queries, setQueries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    axios.get(`/getQueryById/${userId}`)
      .then(res => setQueries(res.data.data || []))
      .catch(err => console.error("Error fetching queries", err));
  }, [userId]);

  const handleUpdate = async (id) => {
    try {
      await axios.put(`/queries/${id}`, { description: editedText });
      setEditingId(null);
      setEditedText("");
      const res = await axios.get(`/queries/user/${userId}`);
      setQueries(res.data.data || []);
    } catch (err) {
      console.error("Error updating query", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/queries/${id}`);
      setQueries(prev => prev.filter(q => q._id !== id));
    } catch (err) {
      console.error("Error deleting query", err);
    }
  };

  return (
    <div className="content-wrapper bg-dark text-light p-4">
      <h2 className="text-info mb-4 text-center">Your Submitted Queries</h2>
      <div className="row">
        {queries.length === 0 ? (
          <p className="text-secondary">You haven’t submitted any queries yet.</p>
        ) : (
          queries.map((query, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="card bg-dark border-primary shadow-sm text-light">
                <div className="card-body">
                  <h6 className="text-info">Category: {query.category}</h6>
                  <hr className="bg-primary" />
                  {editingId === query._id ? (
                    <>
                      <textarea
                        className="form-control mb-2 text-dark"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleUpdate(query._id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>{query.description}</p>
                      <div className="d-flex justify-content-between">
                        <small className="text-secondary">
                          Date: {new Date(query.createdAt).toLocaleDateString()}
                        </small>
                        <div className="btn-group">
                          <button
                            className="btn btn-sm btn-outline-info"
                            onClick={() => {
                              setEditingId(query._id);
                              setEditedText(query.description);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(query._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewQueries;