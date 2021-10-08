import React from 'react';
// import {} from './styles';
// import AppLayout from '../components/AppLayout';
import HomeLayout from '../components/HomeLayout';

const Home = () => (
  <HomeLayout>
    <div className="container">
      <nav className="local-nav">
        <div className="local-nav-links">
          <a href="#" className="product-name">STUDY BOARD</a>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </div>
      </nav>
    </div>
  </HomeLayout>
);

export default Home;
