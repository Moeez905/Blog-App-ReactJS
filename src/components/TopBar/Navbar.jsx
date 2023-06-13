import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.jpg"
import Routes from "react-router-dom"
import './Navbar.css';
import Login from '../login/Login';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="navbar-text">Home</div>

        <div className="dropdown">
          <select className="dropdown-button">
            <option value="" disabled selected hidden>
              Products
            </option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>

        <div className="dropdown">
          <select className="dropdown-button">
            <option value="" disabled selected hidden>
              Resources
            </option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>


        <div className="navbar-text">Pricing</div>

          <Link to= "/login" className="button-3" role="button">  Log in  </Link>

        <Link to="/register" className="navbar-mobile-item button-4" role="button" >Sign up</Link>

      
        {/* <button className="button-3" role="button">
          Log in
        </button> */}
        {/* <button className="button-4" role="button">
          Sign up
        </button> */}
      </div>

      {isMobileMenuOpen && (
        <div className="navbar-mobile">
          <div className="navbar-mobile-item">
            Home
          </div>

            <div  className="navbar-mobile-item">
          <select className="dropdown-button">
            <option value="" disabled selected hidden>
              Products
            </option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>


           <div  className="navbar-mobile-item">
          <select className="dropdown-button">
            <option value="" disabled selected hidden>
              Resources
            </option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>

          <div className="navbar-mobile-item">
            Pricing
          </div>
        {/* <Link to={{ pathname: '/login', }} className="button-3" role="button"  state= { Login } >Log in</Link> */}

          {/* <Link
            to="/register"
            className="navbar-mobile-item button-4"
            role="button"
          >
            Sign up
          </Link> */}
          

          
        </div>
      )}
    </nav>
  );
}
