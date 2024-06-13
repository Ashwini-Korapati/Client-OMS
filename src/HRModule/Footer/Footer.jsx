import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-section">
      
        <p>
          Terms of Service Privacy Policy
        </p>
        
      </div>
      <div className="footer-center-section">
        <div className="icons">
          <a href="https://nmit-solutions.com/">
            <FaLinkedin style={{ color: "#0077B5" }} fontSize={"30px"} />
          </a>
          <a href="https://nmit-solutions.com/">
            <FaFacebookSquare style={{ color: "#1877F2" }} fontSize={"30px"} />
          </a>
          <a href="https://nmit-solutions.com/">
            <FaInstagram style={{ color: "#E1306C" }} fontSize={"30px"} />{" "}
          </a>
          <a href="https://nmit-solutions.com/">
            <FaTwitterSquare style={{ color: "#1DA1F2" }} fontSize={"30px"} />
          </a>
        </div>
      </div>

      
    </div>
  );
}

export default Footer;