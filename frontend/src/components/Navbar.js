import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home">FOSSEE Workshops</Link>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/statistics" onClick={() => setMenuOpen(false)}>Workshop Statistics</Link></li>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;