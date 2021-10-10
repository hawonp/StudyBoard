import React from 'react';
import Head from 'next/head';
import { Image } from 'antd';
import OtherLayout from '../components/OtherLayout';

const About = () => (
  <>
    <Head>
      <title>Study Board | About</title>
    </Head>
    <OtherLayout>

      <div className="about-page">
        <div className="fh5co-person">

          <h1>About Study Board</h1>
          <hr style={{ size: '8', width: '40%' }} />
          <br />
          <br />
          <span className="fh5co-position">welcome! Learn more about our services

            > Why do you need our service?
            A public platform that builds a final collection of people’s questions and answers.
            It is a community-based space and information-providing sharing service to find and contribute to answers to technical problems.

            >What do we provide?

            >How to use our service?

            You can quickly receive answers from professors of student experts while sharing problems that you don't know and don't understand in class.
          </span>
          <ul className="social social-circle" />
        </div>
      </div>
    </OtherLayout>
  </>
);

export default About;
