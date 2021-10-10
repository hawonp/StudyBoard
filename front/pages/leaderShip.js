import React from 'react';
import Head from 'next/head';
import { Row, Col, Image } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OtherLayout from '../components/OtherLayout';

const LeaderShip = () => (
  <>
    <Head>
      <title>Study Board | LeaderShip </title>
    </Head>

    <OtherLayout>

      <section id="fh5co-about" data-section="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="leadership">LeaderShip</h2>
              <h1 className="icon-leader">
                <FontAwesomeIcon icon={faCode} />
              </h1>
              <div className="row">
                <div className="leadership-team">
                  <h3>
                    StudyBoard Leadership Team
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <Row gutter={[24, 16]}>

            <Col span={8}>
              <div className="fh5co-person">
                <div>
                  <Image src="http://cubelink.me/media/article/%EC%9A%B0%EC%A3%BC%EC%9D%B8.png" alt="Trulli" width="100%" height="100%" />
                </div>
                <h3>Pyungkang Hong</h3>
                <span className="fh5co-position">Web Designer</span>
                <ul className="social social-circle" />
              </div>
            </Col>

            <Col span={8}>
              <div className="fh5co-person">
                <div>
                  <Image src="http://cubelink.me/media/article/%EC%9A%B0%EC%A3%BC%EC%9D%B8.png" alt="Trulli" width="100%" height="100%" />
                </div>
                <h3>Hawon Park</h3>
                <span className="fh5co-position">Project manger</span>
                <ul className="social social-circle" />
              </div>
            </Col>

            <Col span={8}>
              <div className="fh5co-person">
                <div>
                  <Image src="http://cubelink.me/media/article/%EC%9A%B0%EC%A3%BC%EC%9D%B8.png" alt="Trulli" width="100%" height="100%" />
                </div>
                <h3>Jeongho Shin</h3>
                <span className="fh5co-position">Lead Programmer</span>
                <ul className="social social-circle">
                  {/* <li><a href="#"><i className="icon-twitter" /></a></li> */}
                </ul>
              </div>
            </Col>

          </Row>
        </div>
      </section>
    </OtherLayout>
  </>
);

export default LeaderShip;
