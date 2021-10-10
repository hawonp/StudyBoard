import React from 'react';
// import {} from './styles';
// import AppLayout from '../components/AppLayout';
import { Row, Col, Image } from 'antd';
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

        {/* 첫 보여지는부부 */}

        <div className="outer">
          <div className="first-description">
            <Row className="content" gutter={[32, 32]}>
              <Col className="leftside" span={12}>
                <div className="leftside-box">
                  <h1>Welcom to StudyBoard</h1>
                  <p>
                    From first day to finals, get homework help, exam prep & writing support—tailored to your courses.
                  </p>
                  <div className="wrapper">
                    <div className="SIGN">
                      <a href="/studyboard" className="c-tag">Find your Answer!</a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="rightside" span={12}>
                <div id="second-image" />
              </Col>
            </Row>
          </div>
        </div>

        {/*  1번 스크롤 하는공간 */}
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

        {/*  2번 스크롤 하는공간 */}
        <section className="scroll-section" id="scroll-section-1">
          <p className="description">
            <strong>보통 스크롤 영역</strong>
            우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다
            우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다
            우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다
            우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다
            우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다
            우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다
            우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다우리는 공부하기싫은 사람들이다
          </p>
        </section>

        {/*  3번 스크롤 하는공간 */}
        <section className="scroll-section" id="scroll-section-2">
          <div className="sticky-elem main-message">
            <p>
              <small>알고싶으면 스터디 보드로 </small>
              물어보고싶은게 뭐야 ?
            </p>
          </div>
          <div className="sticky-elem desc-message">
            <p>
              내가 모르는거있으면 물어봐
            </p>
            <div className="pin" />
          </div>
          <div className="sticky-elem desc-message">
            <p>
              스터디보드에서는 좋아요도 있어, <br /> 좋아
            </p>
            <div className="pin" />
          </div>
        </section>

        {/*  4번 스크롤 하는공간 */}
        <section className="scroll-section" id="scroll-section-3">
          <p className="mid-message">
            <strong>Retina 머그</strong>
            <br />
            공부를 하고있음<br />
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
      <script scr="js/main.js" />
    </body>
  </html>
);

export default Home;
