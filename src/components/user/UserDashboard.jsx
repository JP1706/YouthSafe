import React, { useEffect, useState } from "react";
import "../../assets/css/adminlte.min.css";
import "../../assets/css/adminlte.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const UserDashboard = () => {
    const userId = localStorage.getItem("id")
    const [userProfile, setuserProfile] = useState({})
    const [queries, setQueries] = useState([])
    const [Reports, setReports] = useState([])

    const getUserProfile = async () => {
        const res = await axios.get("/user/" + userId)
        setuserProfile(res.data.data)
    }
    
    const getUserQueries = async () => {
        const res = await axios.get("/getQueryById/" +userId)
        setQueries(res.data.data)
    }

    const getUserReports = async () => {
        const res = await axios.get("/getReportByUserId/" +userId)
        setReports(res.data.data)
    }


    useEffect( () => {
        getUserProfile(), getUserQueries(), getUserReports()
    }, [])
    return (
        <div className="content-wrapper">
            {/* Page Header */}
            <section className="content-header">
                <div className="container-fluid text-center">
                    <div className="row mb-2">
                        <div className="col-sm-6 offset-sm-3">
                            <h1 className="text-dark">Welcome {userProfile.firstName}</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* Dashboard Cards */}
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{queries.length}</h3>
                                    <p>Submitted Queries</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-question-circle"></i>
                                </div>
                                <Link to="/user/queries" className="small-box-footer">
                                    View Queries <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{Reports.length}</h3>
                                    <p>Reports Submitted</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-flag"></i>
                                </div>
                                <Link to="/user/myReports" className="small-box-footer">
                                    View Reports <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>7</h3>
                                    <p>Habits Tracked</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                                <Link to="/user/habits" className="small-box-footer">
                                    View Habits <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>2</h3>
                                    <p>Pending Responses</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <Link to="/user/responses" className="small-box-footer">
                                    Check Responses <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Recent Queries & Reports */}
                    <div className="row">
                        {/* Recent Queries */}
                        <div className="col-md-6">
                            <div className="card bg-dark text-light">
                                <div className="card-header">
                                    <h3 className="card-title">Recent Queries</h3>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item bg-dark text-light">
                                            <i className="fas fa-question-circle text-info"></i> Issue with Cyberbullying
                                        </li>
                                        <li className="list-group-item bg-dark text-light">
                                            <i className="fas fa-question-circle text-info"></i> Mental Health Support Needed
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Recent Reports */}
                        <div className="col-md-6">
                            <div className="card bg-dark text-light">
                                <div className="card-header">
                                    <h3 className="card-title">Recent Reports</h3>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item bg-dark text-light">
                                            <i className="fas fa-flag text-danger"></i> Reported Online Harassment
                                        </li>
                                        <li className="list-group-item bg-dark text-light">
                                            <i className="fas fa-flag text-danger"></i> Cyber Threats Received
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

