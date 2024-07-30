import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from '../../assets/Images/logo.png'

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow footer" : "footerHide footer"}>
      <div className="footer-container">
        <div className="footer-section description">
          <div className="logo-name">
          <img src={logo} alt="JobSite Logo" className="logo" />
          <h4>Work Wave</h4>
          </div>
          <p>Your trusted job-seeking platform to connect with top employers and land your dream job. We provide comprehensive resources and tools to help you navigate your career path.</p>
          <div>&copy; All Rights Reserved By @WorkWave.</div>
        </div>
       <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@jobsite.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Job Street, JobCity, JOB123</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        
        </div>
        </div>
    </footer>
  );
};

export default Footer;
