import { Link } from 'react-router-dom';
import React from 'react';

function NavigationComponent(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/countries" className="nav-link">
                Countries
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

export default NavigationComponent;
