import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import bgImage from '../assets/first.jpeg';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div
      className="intro-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="intro-content">
        <h1 className="logo">E-Chat SR9</h1>
        <div className="circle-box">
          <p>Stay Connected</p>
          <p>Stay Chatting</p>
        </div>
        <button
          className="get-started-button"
          onClick={() => navigate('/auth')}
        >
          Get Started
        </button>
        <p className="version">Version 2.1.0</p>
      </div>
    </div>
  );
}
