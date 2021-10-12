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
      
          <h3>
            Why do you need our service?
          </h3>
          <p>
            StudyBoard's community-based, information-providing service to answer your questions is like no other
          </p>

          <h3>
          How to use our service?
          </h3>
          <p>
            Ask any question and recieve replies from a wide variety of knowledgeable people!
          </p>
          <ul className="social social-circle" />
        </div>
      </div>
    </OtherLayout>
  </>
);

export default About;
