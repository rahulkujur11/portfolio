import React from 'react';
import './Contact.css'; // Updated to include styles for email
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Importing email icon

const Contact = () => {
  return (
    <section id="contact" className="full-window">
      <h1>Contact</h1>
      
      {/* Social Media and Email Links with Icons */}
      <div className="social-links">
        <ul>
          <li>
            <a
              href="mailto:rahulkujur31@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope size={50} /> {/* Email icon */}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rahulkujur11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={50} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rahul-kujur-182733156/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={50} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={50} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
