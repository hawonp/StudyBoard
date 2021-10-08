import React from 'react';
// import {} from './styles';
// import AppLayout from '../components/AppLayout';
import HomeLayout from '../components/HomeLayout';

const Home = () => (
  <body>
    <div className="container">
      <nav className="global-nav">
        <div className="global-nav-links">
          <a href="/profile" className="global-nav-item">😀 Profile</a>
          <a href="/studyBoard" className="global-nav-item">❓ Ask Question </a>
          <a href="/about" className="global-nav-item">📢 About</a>
          <a href="/rank" className="global-nav-item">👍 Rank </a>
        </div>
      </nav>
      <nav className="local-nav">
        <div className="local-nav-links">
          <a href="/" className="product-name">STUDY BOARD</a>
          <a href="/studyBoard">🏫 Question Board</a>
          <a href="/studyBoard">✅ Login</a>
        </div>
      </nav>
    </div>
  </body>
);

export default Home;
