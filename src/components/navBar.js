import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [activeButton, setActiveButton] = useState('home')
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2 sticky-top">
      <div className="container">
        {/* Logo + Nom */}
        <div className="d-flex align-items-center me-5">
          <img src="/delivery.png" alt="Logo" width={48} className="me-2" />
          <span className="h5 mb-0 text-primary fw-bold">Delivery</span>
        </div>

        {/* Burger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link px-3 ${
                  activeButton === 'home'
                    ? 'active text-primary border-bottom border-2 border-primary'
                    : ''
                }`}
                onClick={() => setActiveButton('home')}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/a-propos"
                className={`nav-link px-3 ${
                  activeButton === 'about'
                    ? 'active text-primary border-bottom border-2 border-primary'
                    : ''
                }`}
                onClick={() => setActiveButton('about')}>
                À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link px-3 ${
                  activeButton === 'contact'
                    ? 'active text-primary border-bottom border-2 border-primary'
                    : ''
                }`}
                onClick={() => setActiveButton('contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckChecked"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
          <label className="form-check-label" htmlFor="switchCheckChecked">
            {isDarkMode ? '🌙' : '☀️'}
          </label>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
