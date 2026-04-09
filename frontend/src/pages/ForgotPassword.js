import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Reset Password</h2>
        <p className="forgot-subtitle">
          Enter your email and we'll send you a reset link
        </p>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn-primary">Send Reset Link</button>
        <div className="forgot-links">
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;