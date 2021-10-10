import React from 'react';
import Head from 'next/head';
import { Row, Col, Layout, Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import AppLayout from '../components/AppLayout';
import AdminLayout from '../components/AdminLayout';

const { Header, Footer, Content } = Layout;

const Rank = () => (
  <>
    <Head>
      <title>Study Board | Admin</title>
    </Head>

    <AdminLayout>

      <Layout style={{ padding: '0.5rem 1rem' }}>

        <div>
          <p>
            this is user page for admin
          </p>
        </div>
      </Layout>

    </AdminLayout>
  </>
);

export default Rank;
