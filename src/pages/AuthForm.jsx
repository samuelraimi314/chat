import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AuthForm.css';

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignupSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    // --- Simulated Signup Logic ---
    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields for signup.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // In a real app, you'd send this data to your backend
    console.log('Simulating Signup:', { email, password });

    // Simulate success: redirect to chat page
    alert('Signup successful! Redirecting to chat...');
    navigate('/chat');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    // --- Simulated Login Logic ---
    if (!email || !password) {
      alert('Please enter your email and password for login.');
      return;
    }

    // In a real app, you'd send this data to your backend for verification
    console.log('Simulating Login:', { email, password });

    // Simulate success: redirect to chat page
    alert('Login successful! Redirecting to chat...');
    navigate('/chat');
  };

  return (
    <div className="auth-container">
      <div className="form-box">
        <h2>{activeTab === 'signup' ? 'Signup Form' : 'Login Form'}</h2>
        <div className="tab-buttons">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('login');
              // Clear form fields when switching tabs
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            }}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('signup');
              // Clear form fields when switching tabs
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            }}
          >
            Signup
          </button>
        </div>

        <form onSubmit={activeTab === 'signup' ? handleSignupSubmit : handleLoginSubmit}>
          {activeTab === 'signup' && (
            <>
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">Signup</button>
            </>
          )}

          {activeTab === 'login' && (
            <>
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">Login</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}