import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt={logo} />
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/destination" className="nav-link">
                Destination
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to="/" className="nav-link btn btn-warning btn-sm text-dark">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
