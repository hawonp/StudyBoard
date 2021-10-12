import React, { useState } from 'react';
// import {} from './styles';
// import AppLayout from '../components/AppLayout';
// import { useMenu } from 'react';
import { Row, Col, Image } from 'antd';

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
            <a href="/" className="product-name">StudyBoard</a>
            <a href="/studyBoard">🏫 Question Board</a>
            <a href="/studyBoard">✅ Login</a>
          </div>
        </nav>

        {/* 첫 보여지는부부 */}

        <div className="outer" id="scroll-section-1">
          <Row className="content" gutter={8}>
            <Col className="leftside" span={24}>
              <div className="leftside-box">
                <h1>Welcome to StudyBoard!</h1>
                <p>
                  Explore all that StudyBoard has to offer and more!
                </p>
                <div className="wrapper">
                  <div className="SIGN">
                    <a href="/studyBoard" className="c-tag">Click Here to Ask Anything!</a>
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col className="rightside" span={12}> */}
            {/*  <div id="second-image" /> */}
            {/* </Col> */}
          </Row>

        </div>

        {/*  1번 스크롤 하는공간 */}
        {/* <section className="scroll-section" id="scroll-section-0">
          <h1>Here for every moment</h1>
          <Row gutter={[16, 24]}>

            <Col span={6}>
              <div className="homeformoment">
                <div>
                  <Image
                    src="http://cubelink.me/media/article/1_601Tb6M.png"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <br />
                  <h2>Homework help</h2>
                  <span className="fh5co-position">Study with 55+ million step-by-step explanations, Expert Q&As & math suppor</span>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="homeformoment">
                <div>
                  <Image src="http://cubelink.me/media/article/2.png" width="100%" height="100%" />
                </div>
                <div>
                  <h2>Exam prep & practice</h2>
                  <span className="fh5co-position">Get ready for test day with 500+ million flashcards or review with practice exams.</span>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="homeformoment">
                <div>
                  <Image src="http://cubelink.me/media/article/3.png" width="100%" height="100%" />
                </div>
                <div>
                  <br />
                  <h2>Understand a topic</h2>
                  <span className="fh5co-position">Simplify the toughest concepts with digestible topic breakdowns & videos.</span>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="homeformoment">
                <div>
                  <Image src="http://cubelink.me/media/article/4.png" alt="Trulli" width="100%" height="100%" />
                </div>
                <div>
                  <h2>Network Work</h2>
                  <span className="fh5co-position">Strengthen your writing with plagiarism checks, expert proofreading & instant citations.</span>
                </div>

              </div>
            </Col>
          </Row>
        </section> */}

        {/*  4번 스크롤 하는공간 */}
        {/* <section className="scroll-section" id="scroll-section-3">
          <p className="mid-message">
            <strong>Ranking System</strong>
            <br />
            공부를 하고있음<br />
            공부하기싫어요
          </p>
          <Row gutter={[8, 16]}>

            <Col span={12} className="square">
              <div className="RankBox">
                <Image src="http://cubelink.me/media/article/11.jpg" width="100%" height="100%" />
              </div>
            </Col>

            <Col className="square" span={12}>
              <div className="RankBox">
                <Image src="http://cubelink.me/media/article/2.jpg" width="100%" height="100%" />
              </div>
            </Col>
          </Row>

        </section> */}
        <footer className="footer">
          @2021, StudyBoard Inc, All rights reserved.
        </footer>
      </div>
      <script scr="js/main.js" />

    </body>
  </html>
);

export default Home;
