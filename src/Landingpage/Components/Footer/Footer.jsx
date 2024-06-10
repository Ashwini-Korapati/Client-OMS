import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-section">
        <h2>NMIT Solutions</h2>
        <p>
          5th, Samhita Villa, aspire building, 1st Cross Rd, near benniganahalli
          metro station, Sakshi Nagar, Pai Layout, Mahadevapura, Bengaluru,
          Karnataka 560016
        </p>
        <p>
          <FaPhoneAlt /> +919990009990{" "}
        </p>
      </div>
      <div className="footer-center-section">
        <h2>Follow Us</h2>
        <div className="icons">
            <a href="https://nmit-solutions.com/"><FaLinkedin style={{ color: "#0077B5" }} fontSize={"30px"}/></a>
            <a href="https://nmit-solutions.com/"><FaFacebookSquare style={{ color: "#1877F2" }} fontSize={"30px"}/></a>
            <a href="https://nmit-solutions.com/"><FaInstagram style={{ color: "#E1306C" }} fontSize={"30px"}/> </a>
            <a href="https://nmit-solutions.com/"><FaTwitterSquare style={{ color: "#1DA1F2" }} fontSize={"30px"}/></a>
        </div>
      </div>

      <div className="footer-section">
        <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.651036457896!2d77.66522653494286!3d12.994157427433413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1189ea149f67%3A0x43a45237e87c433!2sNMIT%20SOLUTIONS%20(opc)%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1717743556930!5m2!1sen!2sin"
        ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;