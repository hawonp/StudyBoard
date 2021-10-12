import React from 'react';
import Head from 'next/head';
import OtherLayout from '../components/OtherLayout';

const Contact = () => (
  <>
    <Head>
      <title>Study Board | Contact </title>
    </Head>
    <OtherLayout>
      <div>
        <div className="about-page">
          <div className="fh5co-person">

            <h1>Contact Us!</h1>
            <hr style={{ size: '8', width: '40%' }} />
            <br />
            <br />
            <p>
            Contact us at help@studyboard.com
            </p>

            <ul className="social social-circle" />
          </div>
        </div>
      </div>
    </OtherLayout>
  </>
);

export default Contact;
