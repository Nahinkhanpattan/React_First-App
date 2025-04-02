import React from 'react';
import '../pages-styles/Contact.css';

export default function Contact() {
  return (
    <>
      <section className="HeroContact">
        <div className="main-content">
          <h1>Get In <span style={{ color: '#b44545' }}>Touch</span></h1>
          <p>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out - I'm always open to new collaborations.
          </p>

          <div className="contact-container">
            <div className="contact-info">
              <h2>Contact <span style={{ color: '#b44545' }}>Info</span></h2>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>nahinkhanpattan@gmail.com</span>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+91 6305260604</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Guntur,Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}