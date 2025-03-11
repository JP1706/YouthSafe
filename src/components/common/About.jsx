import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/adminlte.min.css";
import "../../assets/css/adminlte.css";

export const About = () => {
  const heroStyle = {
    height: "60vh",
    position: "relative",
    backgroundImage: "url('src/assets/images/image.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.6)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-center text-light" style={heroStyle}>
        <div style={overlayStyle}></div>
        <div className="p-5 position-relative" style={contentStyle}>
          <h1 className="display-4 fw-bold text-info">About YouthSafe</h1>
          <p className="lead">Protecting youth, promoting mental well-being, and fostering safe digital spaces.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-info">Our Mission</h2>
              <p>
                YouthSafe is dedicated to empowering young individuals by creating a **safe**, **supportive**, and **educational** digital space.
                We strive to provide tools that ensure mental health awareness, online safety, and community support.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="src/assets/images/Screenshot 2025-03-09 at 1.54.16 PM.png"
                alt="Our Mission"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5 text-dark">
        <div className="container">
          <h2 className="text-center mb-5 text-info">Our Core Values</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="small-box bg-gradient-primary">
                <div className="inner text-center p-4">
                  <h4 className="fw-bold">Safety First</h4>
                  <p>Providing a secure space where youth can express themselves without fear.</p>
                </div>
                <div className="icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="small-box bg-gradient-info">
                <div className="inner text-center p-4">
                  <h4 className="fw-bold">Mental Health Awareness</h4>
                  <p>Offering resources to help youth manage stress, anxiety, and emotional well-being.</p>
                </div>
                <div className="icon">
                  <i className="fas fa-brain"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="small-box bg-gradient-success">
                <div className="inner text-center p-4">
                  <h4 className="fw-bold">Community Support</h4>
                  <p>Connecting youth with mentors, educators, and mental health professionals.</p>
                </div>
                <div className="icon">
                  <i className="fas fa-users"></i>
                </div>
              </div>
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
  );
};

