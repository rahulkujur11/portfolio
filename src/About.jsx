import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            {/* <h2 className="section-title">About Me</h2> */}
            <div className="about-content">
                <div className="about-details">
                    <p>
                        Hi, I'm <span className="highlighted-text">Rahul Kujur</span>, a passionate software engineer with experience in full-stack development and cloud services.
                        I specialize in building secure and scalable systems, with a strong focus on both frontend and backend technologies.
                    </p>
                    <ul className="skills-list">
                        <li>Java</li>
                        <li>Python</li>
                        <li>Spring Boot</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>SQL Server</li>
                        <li>Hadoop</li>
                        <li>PySpark</li>
                        <li>Azure</li>
                        <li>AWS</li>
                        <li>Git</li>
                    </ul>
                    <p>
                        I am passionate about tackling challenging problems and developing innovative solutions. Let's connect to see how we can collaborate and bring your ideas to life!
                    </p>
                </div>
                {/* Social Media Links with Icons Only */}
      <div className="social-links">
        <ul>
          <li>
            <a href="https://github.com/rahulkujur11" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} /> {/* GitHub icon */}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rahul-kujur-182733156/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} /> {/* LinkedIn icon */}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={50} /> {/* Twitter icon */}
            </a>
          </li>
        </ul>
      </div>
            </div>
        </section>
    );
};

export default About;
