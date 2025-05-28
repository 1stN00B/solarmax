import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../App.css';

const AutoHideNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const collapseRef = useRef(null);

  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (collapseRef.current) {
      const collapseElement = collapseRef.current;
      
      if (isNavbarOpen) {
        collapseElement.classList.add('show');
      } else {
        collapseElement.classList.remove('show');
      }
    }
  }, [isNavbarOpen]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>LOGO</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleToggleClick}
          aria-expanded={isNavbarOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          className="collapse navbar-collapse flex-grow-0" 
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item pe-3">
              <Link className="nav-link active" aria-current="page" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            
            <li className="nav-item dropdown pe-3">
              <NavLink className={({ isActive }) => isActive ?"nav-link dropdown-toggle active-link": "nav-link"} to="/service" id="navbarDropdown" onClick={handleNavLinkClick}>
                Services
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/Service#residential"  onClick={handleNavLinkClick}>Residential Solar Panels</Link></li>
                <li><Link className="dropdown-item" to="/service#commercial"  onClick={handleNavLinkClick}>Commercial Solar Panels</Link></li>
                <li><hr className="dropdown-divider"/></li>
              </ul>
            </li>
            
            <li className="nav-item pe-3">
              <NavLink className={({ isActive }) => isActive ?"nav-link active-link": "nav-link"} to="/about" onClick={handleNavLinkClick}>About us</NavLink>
            </li>
          </ul>
          
          <Link className="buttonnavbar ms-3" to="/contact" onClick={handleNavLinkClick}>
            <div className="hoverEffect">
              <div className='navbarmain'></div>
            Get in touch
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AutoHideNavbar;