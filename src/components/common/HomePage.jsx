import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/adminlte.min.css'
import '../../assets/css/adminlte.css'

export const HomePage = () => {
  const heroStyle = {
    height: "100vh",
    position: "relative",
    backgroundImage: "url(src/assets/images/backgroundImage.avif)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.6)"
  }

  const contentStyle = {
    position: "relative",
    zIndex: 2
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center" style={heroStyle}>
        <div style={overlayStyle}></div>
        <div className="text-center text-light p-5" style={contentStyle}>
          <h1 className="display-4 fw-bold text-info">YouthSafe</h1>
          <p className="lead">
            Empowering youth with safety, mental health awareness, and digital literacy.
          </p>
          <Link to="/signup" className="btn btn-outline-warning btn-lg me-3">
            Join Now
          </Link>
          <Link to="/login" className="btn btn-outline-light btn-lg">
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
        <section className="py-5 bg-dark text-light">
        <div className="container">
            <h2 className="text-center mb-4 text-info">Our Features</h2>
            <div className="row">
            <div className="col-md-4">
                <div className="small-box bg-gradient-primary">
                <div className="inner text-center p-4">
                    <h4 className="fw-bold">Youth Protection</h4>
                    <p>Robust monitoring and reporting tools to ensure a safe environment for youth.</p>
                </div>
                <div className="icon">
                    <i className="fas fa-shield-alt"></i>
                </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="small-box bg-gradient-info">
                <div className="inner text-center p-4">
                    <h4 className="fw-bold">Community Support</h4>
                    <p>Connecting youth with counselors, parents, and educators for guidance and support.</p>
                </div>
                <div className="icon">
                    <i className="fas fa-users"></i>
                </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="small-box bg-gradient-success">
                <div className="inner text-center p-4">
                    <h4 className="fw-bold">Insights & Analytics</h4>
                    <p>Real-time analytics and reports to monitor youth activity and trends.</p>
                </div>
                <div className="icon">
                    <i className="fas fa-chart-line"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src="src/assets/images/Mindguard-Logo.png" 
                alt="About YouthSafe" 
                className="img-fluid rounded" 
              />
            </div>
            <div className="col-md-6">
              <h2>About YouthSafe</h2>
              <p>
                YouthSafe is a comprehensive platform designed to protect youth from digital threats, 
                support their mental health, and foster safe online communities. Our app offers robust tools 
                for reporting, monitoring, and education, serving youth, parents, educators, and counselors.
              </p>
              <Link to="/about" className="btn btn-outline-primary btn-lg mt-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 bg-primary text-light text-center">
        <div className="container">
          <h2 className="mb-4">Join the YouthSafe Community Today</h2>
          <Link to="/signup" className="btn btn-light btn-lg">
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 bg-dark text-light text-center">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} YouthSafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}