import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ViewReports = () => {

    const [reports, setreports] = useState([])

    const getMyReports = async (id) => {
        const res = await axios.get("/getReportByUserId/" + id)
        setreports(res.data.data)
    }

    useEffect(() => {
        getMyReports(localStorage.getItem("id"))
    }, [])
    return (
        <div className='bg-dark text-light'>
            <h1>My Reports</h1>

            <div className="container-fluid mt-4">
                <div className="row">
                    {
                        reports?.map((report) => {
                            return (
                                <div className="col-md-3 my-4">
                                    {/* <Link style={{ textDecorationLine: "none" }} to={`/reportdetail/${report.imdbID}`}> */}
                                        <div class="card text-light bg-transparent border-primary-subtle h-100">
                                            <img src={report.perpetratorImageURL} class="card-image-top img-fluid" alt="Card image" />
                                            <div class="card-body">
                                                <h5 class="card-title">{report.incidentType}</h5>
                                                <p class="card-text">{report.description}</p>
                                            </div>
                                        </div>
                                    {/* </Link> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
