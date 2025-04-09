import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from "react-toastify";

export const CounselorViewAllQueries = () => {
  const [queries, setQueries] = useState([]);

  const fetchQueries = async () => {
      try {
          const res = await axios.get('/getQueries');
          console.log("Fetched queries:", res.data.data);
          setQueries(res.data.data);
        } catch (error) {
            toast.error("Error fetching queries", { theme: "dark", transition: Bounce });
        }
    };
    useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="content-wrapper bg-dark text-light min-vh-100">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>User Queries</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {queries.length === 0 ? (
              <div className="col-12">
                <div className="alert alert-info text-center">No queries found.</div>
              </div>
            ) : (
              queries.map((q) => (
                <div key={q._id} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="card card-primary card-outline bg-gradient-dark w-100 mb-4">
                    <div className="card-header border-0">
                      <h5 className="card-title mb-0">{q.category}</h5>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text flex-grow-1">{q.description}</p>
                      <Link 
                        to={`/counselor/feedback/query/${q._id}`} 
                        className="btn btn-outline-primary mt-3 align-self-start">
                        Give Feedback
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar theme="dark" transition={Bounce} />
    </div>
  );
};
