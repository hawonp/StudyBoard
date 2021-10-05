import React from 'react';
// npm i prop-tyeps 설치를 해줘야지 돌아간다
import PropTypes from 'prop-types';
import Link from 'next/link';
// 디자인
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

// 스타일 컴포넌트
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // 로그인이되면 알아서 앱레이아웃이 리렌더링되는 기능
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>StudyBaord </a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>Profile </a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/studyBoard"><a> Ask Question </a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/about"><a>About </a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/about"><a>Rank </a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
      </Menu>
      {/* 거터라는건 컬럼사이 간격 */}
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={16}>
          { children }
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  // 칠드런은 노드입니다 화면에 그릴 수 있는게 노드
  children: PropTypes.node.isRequired,
};

export default AppLayout;

// 다른 레이아웃을 만들고싶으면 다른 레이아웃 파일을 만들면된다
// 예 otherlayout 만들면 Layout 으로 적요해서 감싸면된다
