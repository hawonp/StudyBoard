import React from 'react';
import Head from 'next/head';
import { Row, Col, Layout, Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import AppLayout from '../components/AppLayout';

const { Header, Footer, Content } = Layout;

const Rank = () => (
  <>
    <Head>
      <title>Study Board | Admin</title>
    </Head>

    <AppLayout>

      <Layout style={{ padding: '0.5rem 1rem' }}>
        <Result
          icon={<SmileOutlined />}
          title="TOP RANK CONGRATULATIONS!"
        />
        <Content>
          <Row gutter={[32, 24]} style={{ textAlign: 'center' }}>
            <Col span={12}>1. Hawon</Col>
            <Col span={12}>2. PK</Col>
            <Col span={12}>3. JeongHo</Col>
            <Col span={12}>4. Mike</Col>
            <Col span={12}>5. Hawon</Col>
            <Col span={12}>6. PK</Col>
            <Col span={12}>7. JeongHo</Col>
            <Col span={12}>8. Mike</Col>
            <Col span={12}>9. Hawon</Col>
            <Col span={12}>10. PK</Col>
            <Col span={12}>11. JeongHo</Col>
            <Col span={12}>12. Mike</Col>
          </Row>
        </Content>

        <Footer style={{ textAlign: 'center' }}>

          <Button type="primary">Go to Ask Question</Button>
        </Footer>

      </Layout>

    </AppLayout>
  </>
);

export default Rank;
