import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/Main">
        {/* Text Analyzer */}
        {props.title}
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/About">
              About <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Main">
              Analyize
            </Link>
          </li>
        </ul>

        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
        <label className="custom-control-label mx-2" htmlFor="customSwitch1" onClick={props.toggle}>Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  );
}
