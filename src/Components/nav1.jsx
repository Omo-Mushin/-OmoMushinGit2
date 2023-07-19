import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



class Nav extends Component {
    state = {  } 
    render() { 
        
        return (
            <nav className='header'>
  
                <h1 className='Name'>
                    Stripe
                </h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <NavLink className="navbar-brand" to="#">Navbar</NavLink> */}
          <button className="navbar-toggler" type="button" 
          data-toggle="collapse" data-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item ">
                <NavLink className="nav-link" to="/homePage">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/news">News Feed <span className="sr-only"></span></NavLink>
              </li>
              {!this.props.user && (
                <React.Fragment>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                </React.Fragment>
              )}
              {this.props.user && (
                <React.Fragment>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/logout">Logout</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/adverts">{this.props.user.email}</NavLink>
                  </li>
                </React.Fragment>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">Post</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/adverts">Adverts</NavLink>
              </li>
              
            </ul>
          </div>
</nav>
                
                
                {/* <div className='header-left'>
                        <div className='header-right-search-icon'>
                            <FaSearch  />
                            <input type='text'/>
                        </div>

                        <div className='header-left-user-icon'>
                            <FaAddressBook size={40}/>
                        </div>
                        <div>
                        <FaCaretDown size={30} />
                        </div>
                        
                        
                </div>
                 */}

            </nav>
        );
    }
}
 
export default Nav;