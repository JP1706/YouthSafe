import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const ViewReports = () => {
    const [reports, setReports] = useState([]);

    const getMyReports = async (id) => {
        const res = await axios.get("/getReportByUserId/" + id);
        setReports(res.data.data);
    };

    useEffect(() => {
        getMyReports(localStorage.getItem("id"));
    }, []);

    return (
        <div className='content-wrapper bg-dark'>
            <section className="content-header">
                <div className="container-fluid bg-dark">
                    <div className="row mb-2">
                        <div className="col-12">
                            <h1 className="text-light text-center">My Reports</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {
                            reports?.map((report) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={report._id}>
                                        <div className="card bg-dark text-light border-primary shadow-sm">
                                            {/* Image Section with Fixed Height */}
                                            <div className="p-3 text-center">
                                                <img
                                                    src={report.perpetratorImageURL}
                                                    className="rounded img-fluid"
                                                    alt="Perpetrator"
                                                    style={{
                                                        maxHeight: "150px",
                                                        width: "100%",
                                                        objectFit: "cover",
                                                        borderRadius: "10px"
                                                    }}
                                                />
                                            </div>

                                            {/* Report Details */}
                                            <div className="card-body">
                                                <h5 className="text-uppercase text-info fw-bold">
                                                    {report.incidentType}
                                                </h5>
                                                <hr className="bg-primary" />
                                                <p className="card-text text-secondary" style={{ lineHeight: "1.5" }}>
                                                    {report.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};
