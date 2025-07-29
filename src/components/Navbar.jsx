import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header id="header" className="fixed-top">
        <nav className="navbar navbar-expand">
          <div className="container header">
            <Link className="navbar-brand" to="/">
              <img
                className="navbar-brand-regular"
                src="/assets/img/logo/logo.png"
                alt="brand-logo"
              />
              <img
                className="navbar-brand-sticky"
                src="/assets/img/logo/logo.png"
                alt="sticky brand-logo"
              />
            </Link>
            <div className="ml-auto"></div>
            <ul className="navbar-nav items">
              {/* <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Quienes Somos <i className="fas fa-angle-down ml-1"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#">
                      Vision
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#">
                      Mission
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/socias">
                      Socias
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Principal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/socias">
                  Socias
                </Link>
              </li>
              {/* <li className="nav-item">
                <a href="services.html" className="nav-link">
                  Noticias
                </a>
              </li> */}
            </ul>
            <ul className="navbar-nav icons">
              <li className="nav-item social">
                <a href="#" className="nav-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav toggle">
              <li className="nav-item">
                <button
                  className="nav-link mobile-menu-toggle"
                  onClick={toggleMobileMenu}
                >
                  <i className="fas fa-bars toggle-icon m-0"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Custom Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <h5 className="mobile-menu-title">Menu</h5>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={closeMobileMenu}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="mobile-menu-body">
            <ul className="mobile-menu-items">
              <li className="mobile-menu-item">
                <Link
                  className="mobile-menu-link"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Principal
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link
                  className="mobile-menu-link"
                  to="/socias"
                  onClick={closeMobileMenu}
                >
                  Socias
                </Link>
              </li>
              <li className="mobile-menu-item">
                <a href="#" className="mobile-menu-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
