// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  // Detect scroll to add transparency and shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsNavbarOpen(false);
  }, [location]);

  // Toggle mobile menu open/close
  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Close menu when clicking nav links
  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/" onClick={handleNavLinkClick} aria-label="Homepage">
          <img src="/images/Logo.png" alt="Logo" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul
        id="navbar-links"
        className={`navbar-links ${isNavbarOpen ? 'open' : ''}`}
        onClick={() => {
          if (isNavbarOpen) setIsNavbarOpen(false);
        }}
      >
        <li>
          <Link to="/" onClick={handleNavLinkClick}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/service" onClick={handleNavLinkClick}>
            Service
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={handleNavLinkClick}>
            About Us
          </Link>
        </li>

        <li className="Nav-button">
          <Link to="/contact" onClick={handleNavLinkClick}>
            Get Started
          </Link>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={handleToggleClick}
        aria-expanded={isNavbarOpen}
        aria-controls="navbar-links"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};

export default ModernNavbar;