import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FastRiderContext } from "../../App.js";

export const Header = () => {
  const { singedInUser } = useContext(FastRiderContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt={logo} />
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
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
          {singedInUser.email ? (
            <p className="m-0">
              Hi,{" "}
              <strong>
                {(singedInUser?.displayName && singedInUser?.displayName) ||
                  "There"}
              </strong>
            </p>
          ) : (
            <NavLink
              to="/login"
              className="nav-link btn btn-warning btn-sm text-dark"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
