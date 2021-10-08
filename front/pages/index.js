import React from 'react';
// import {} from './styles';
// import AppLayout from '../components/AppLayout';
import HomeLayout from '../components/HomeLayout';

const Home = () => (
  <html>
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

        {/*  스크롤 하는공간 */}
        <section className="scroll-section" id="scroll-section-0">
          <h1>We are the SutdyBoard</h1>
          <div className="sticky-elem main-message">
            <p>우리는 모든 질문을 받습니다 <br />모르는걸 물어보세요</p>
          </div>
          <div className="sticky-elem main-message">
            <p>우리는 모든 질문을 받습니다 <br /></p>
          </div>
          <div className="sticky-elem main-message">
            <p>우리는 모든 질문을 받습니다 <br /></p>
          </div>
        </section>
        <section className="scroll-section" id="scroll-section-1">
          <p>
            <strong>
              보통 스크롤
            </strong>
          </p>
        </section>
        <section className="scroll-section" id="scroll-section-2">
          <div>
            <p>
              <small>알고싶으면 스터디 보드로 </small>
            </p>
            <div className="pin">1</div>
          </div>
          <div className="sticky-elem desc-message">
            <p>
              내가 모르는거있으면 물어봐
            </p>
            <div className="pin">1</div>
          </div>

        </section>
        <section className="scroll-section" id="scroll-section-3">
          <p className="mid-message">
            <strong>Retina 머그</strong>
            공부를 하고있음
            공부하기싫어요
          </p>
          <p className="canvas-caption">
            ssssssssssssssssssssssssssssssssssss
          </p>
        </section>
        <footer className="footer">
          2021, StudyBoard
        </footer>
      </div>
    </body>
  </html>
);

export default Home;
