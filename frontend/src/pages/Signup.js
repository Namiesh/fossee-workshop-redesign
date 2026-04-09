import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [form, setForm] = useState({
    username: '', email: '', password: '', confirm: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p className="signup-subtitle">Join FOSSEE Workshops today</p>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Choose a username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Create a password" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirm" placeholder="Confirm your password" onChange={handleChange} />
        </div>
        <button className="btn-primary">Sign Up</button>
        <div className="signup-links">
          <Link to="/">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;