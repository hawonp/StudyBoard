import React from 'react';
import Head from 'next/head';
import { Row, Col } from 'antd';
import AppLayout from '../components/AppLayout';

const Rank = () => (
  <>
    <Head>
      <title>Study Board | Rank</title>
    </Head>
    <AppLayout>
      <div style={{ width: '70%', margin: '30px auto' }}>
        <div style={{ textAlign: 'center' }}>
          <h1> TOP RANK</h1>
        </div>
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
        {/* <Row gutter={[32, 24]} style={{ textAlign: 'center' }}> */}
        {/*  <Col span={12}>5. ICX</Col> */}
        {/*  <Col span={12}>6. ICON</Col> */}
        {/* </Row> */}
      </div>

    </AppLayout>
  </>
);

export default Rank;
