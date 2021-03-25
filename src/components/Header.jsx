import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        {props.text}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarLinks"
        aria-controls="navbarLinks"
        aria-expanded="false"
        aria-label="toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarLinks">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/AddPlayer">
              Add Players
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ShowPlayer">
              Show Players
            </Link>
          </li>
        </ul>
      </div>
      {/* add the props.text as a title  and link to root */}
      {/* add the links to showplayer and addplayer */}
    </nav>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};
