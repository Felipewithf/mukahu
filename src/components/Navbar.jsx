import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
            <li className="nav-item dropdown">
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
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                Que Hacemos
              </a>
            </li>
            <li className="nav-item">
              <a href="services.html" className="nav-link">
                Noticias
              </a>
            </li>
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
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <i className="fas fa-bars toggle-icon m-0"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
