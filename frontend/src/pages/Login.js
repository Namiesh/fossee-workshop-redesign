import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Sign in to FOSSEE Workshops</p>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-primary">Sign In</button>
        <div className="login-links">
          <Link to="/signup">New around here? Sign up</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;