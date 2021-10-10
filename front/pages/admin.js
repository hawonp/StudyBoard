import React from 'react';
import Head from 'next/head';
import { Row, Col, Image } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OtherLayout from '../components/OtherLayout';

const Admin = () => (
  <>
    <Head>
      <title>Study Board | Admin </title>
    </Head>

    <OtherLayout>
      <div>admin</div>
    </OtherLayout>
  </>
);

export default Admin;
