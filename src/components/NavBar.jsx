import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
 export default class NavBar extends Component{
    render() {
        return (
            <nav className='navbar navbar-light
             bg-light'>
                        <a className='navbar-brand' 
                    href="#">NavBar <span className='badge badge-pill badge-secondary'>
                            {this.props.totalCounters}
                    </span>
                    </a>
                <div className='collapse navbar-collapse' 
                id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <NavLink className='nav-item nav-link' to='./movies'>
                            Movies
                        </NavLink>
                        <NavLink className='nav-item nav-link' to='./customers'>
                            Customers
                        </NavLink>
                        <NavLink className='nav-item nav-link' to='./rentals'>
                            Rentals
                        </NavLink>
                    </div>
                </div>
             </nav>
        )
    }
 }