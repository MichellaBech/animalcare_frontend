import { NavLink, Outlet, UNSAFE_FetchersContext, useNavigate } from "react-router";
import { useState } from "react";
import PropTypes from "prop-types";


function MainLayout({ loggedIn, logout }) {

    const navigate = useNavigate(); // Hook til navigation

    const handleLogoClick = () => {
      navigate("/");
    }

    const handleLoginClick = () => {
      navigate("/login");
    }
    

    return ( 
        <div className='container'>
        <header className='header'>
          <img src='animalcare_logo.png' alt='Logo' className='logo'onClick={handleLogoClick} />
          <div>
          {!loggedIn ? (
            <button
              className="left-button"
              type="button"
              onClick={handleLoginClick}
            >
              Login
            </button>
          ) : (
            <button
              className="left-button"
              type="button"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
        </header>
        <div className='content'>
          <nav className='sidebar'>
            <ul>
            <li><NavLink to= '/'>Home</NavLink></li>
              <li><NavLink to= '/veterinaryclinics'>Veterinary Clinics</NavLink></li>
              <li><NavLink to= '/admin' >Admin</NavLink></li>
            </ul>
          </nav>
          <main className="main-content">
          <Outlet />
                </main>
        </div>
        <footer className='footer'><p>&copy; 2024 AnimalCare. All rights reserved.</p></footer>
      </div>
     );
}

export default MainLayout;