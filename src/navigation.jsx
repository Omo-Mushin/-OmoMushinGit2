import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;






// import React, { Component } from 'react';
// import {NavLink, Link} from 'react-router-dom';
//  export default class Navigation extends Component{
//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <Link className="navbar-brand" to="#">Vidly</Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item ">
//                   <NavLink className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/customers">Customers</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/login">Login</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/register">Register</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         )
//     }
//  }