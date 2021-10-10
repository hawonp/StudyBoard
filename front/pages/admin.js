import React from 'react';
import Head from 'next/head';
import { Row, Col, Image } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AdminLayout from '../components/AdminLayout';

const Admin = () => (
  <>
    <Head>
      <title>Study Board | Admin </title>
    </Head>

    <AdminLayout>
      <div>admin</div>
    </AdminLayout>
  </>
);

export default Admin;
