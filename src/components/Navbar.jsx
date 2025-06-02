import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../App.css';

const AutoHideNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const collapseRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const hoverTimeoutRef = useRef(null);

  // Handle navbar toggle click
  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  // Handle nav link clicks
  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle hover events for desktop dropdown
  const handleMouseEnter = () => {
    if (window.innerWidth > 767) {
      clearTimeout(hoverTimeoutRef.current);
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 767) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 300);
    }
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Manage classes for navbar collapse
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

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Cleanup hover timeout
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

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
              <Link 
                className="nav-link active" 
                aria-current="page" 
                to="/" 
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            
            <li 
              className="nav-item dropdown pe-3" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "nav-link dropdown-toggle active-link" : "nav-link dropdown-toggle"
                } 
                to="/service" 
                id="navbarDropdown"
                onClick={(event) => {
                  // On mobile, toggle dropdown instead of navigating
                  if (window.innerWidth <= 767) {
                    event.preventDefault();
                    handleDropdownToggle(event);
                  }
                  // On desktop, just navigate (hover handles dropdown)
                }}
              >
                Services
              </NavLink>

              <ul 
                className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} 
                aria-labelledby="navbarDropdown"
                onMouseEnter={() => clearTimeout(hoverTimeoutRef.current)}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/service#residential"  
                    onClick={handleNavLinkClick}
                  >
                    <div className="dropdown-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </div>
                    <div className="dropdown-content">
                      <span className="dropdown-title">Residential Solar</span>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/service#commercial"  
                    onClick={handleNavLinkClick}
                  >
                    <div className="dropdown-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      </svg>
                    </div>
                    <div className="dropdown-content">
                      <span className="dropdown-title">Commercial Solar</span>
                    </div>
                  </Link>
                </li>

                <li><hr className="dropdown-divider"/></li>
              </ul>
            </li> 
            
            <li className="nav-item pe-3">
              <NavLink 
                className={({ isActive }) => 
                  isActive ? "nav-link active-link" : "nav-link"
                } 
                to="/about" 
                onClick={handleNavLinkClick}
              >
                About us
              </NavLink>
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