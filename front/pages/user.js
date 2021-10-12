import React from 'react';
import Head from 'next/head';
import { Row, Col, Layout, Result, Button, Table, Tag, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import AppLayout from '../components/AppLayout';
import AdminLayout from '../components/AdminLayout';

const { Header, Footer, Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    key: 'nickname',
  },

  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a style={{ color: 'red' }}>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Pk Hong',
    nickname: 'PK-dev',
  },
  {
    key: '2',
    name: 'Jim Green',
    nickname: 'King Of Green',

  },
  {
    key: '3',
    name: 'Joe Black',
    nickname: 'Black J',

  },
  {
    key: '4',
    name: 'Jack Johnson',
    nickname: 'D.Awesome',

  }, {
    key: '5',
    name: 'Daniel Shawn',
    nickname: 'DS',

  },
];

const Rank = () => (
  <>
    <Head>
      <title>Study Board | Admin</title>
    </Head>

    <AdminLayout>

      <div style={{ padding: '1rem 1rem' }}>

        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>

    </AdminLayout>
  </>
);

export default Rank;
