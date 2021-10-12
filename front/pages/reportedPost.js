import React from 'react';
import Head from 'next/head';
import { Row, Col, Layout, Space, Table } from 'antd';
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
    title: 'Content',
    dataIndex: 'Content',
    key: 'Content',
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
    Content: 'This is so stupid',
    // tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    Content: 'hahahahahahahahahahahaahahahahahahahaha I am king',
    // tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    Content: 'who is better than me??? lol ',
    // tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    Content: 'no one block me haha',
    // tags: ['cool', 'teacher'],
  }, {
    key: '5',
    name: 'Joe Black',
    Content: 'Everyone is under my feet.',
    // tags: ['cool', 'teacher'],
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
