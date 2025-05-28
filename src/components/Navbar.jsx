import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../App.css';

const AutoHideNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      // Access Bootstrap through window object
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>LOGO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
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
            Get in touch
            <div className="hoverEffect">
              <div className='navbarmain'></div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AutoHideNavbar;