import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const location = useLocation();

  // Handle scroll to update active section
  const handleScroll = () => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    let currentSection = 'home';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the section is within the viewport, set it as the active section
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  // Update active section on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section when the route changes
  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'home';
    setActiveSection(currentPath);
  }, [location]);

  // Handle mobile menu toggle and close menu on navigation
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="navbar-logo">
          <p className="logo-text">
            <span className="first-name">Rahul</span> <span className="last-name">Kujur</span>
          </p>
        </div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-bar"></div>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
