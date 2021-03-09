import React from 'react'
import {
  Link
} from 'react-router-dom';

import '../style.scss';

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">Employee Management</a>
          <ul className="navbar-nav mr-auto ml-3 mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employee">Add New Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employee/all">Manage Employee</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Menu;