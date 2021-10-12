import React from 'react';
import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Input, Menu } from 'antd';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const HomeLayout = ({ children }) => (
  <div
    style={{ height: '100%' }}
  >
    <Menu
        mode="horizontal"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          // maxWidth: '1000px',
          margin: '0 auto',
          height: '100%',
          color: 'rgb(29,29,31)',
        }}
    >
      <Menu.Item key="home">
        <Link href="/">
          <a className="logoHome">StudyBoard </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link href="/profile"><a>😀 Profile</a></Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/studyBoard"><a>❓ Ask Question </a></Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/about"><a>📢 About </a></Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/rank"><a>👍 Rank </a></Link>
      </Menu.Item>
      <Menu.Item>
        <SearchInput
          enterButton
          placeholder="type what you want"
          allowClear
          style={{
            width: 400,
            color: '#FFFFFF',
            borderRadius: '20px' }}
        />
      </Menu.Item>
      {/* <Menu.Item key="mail"> */}
      {/*    <Input.Search enterButton style={{ verticalAlign: 'middle' }} /> */}
      {/* </Menu.Item> */}
    </Menu>
    <div gutter={8}>
      { children }
    </div>

  </div>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
