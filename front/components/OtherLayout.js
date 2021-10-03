import React, {useState} from 'react';
// npm i prop-tyeps 설치를 해줘야지 돌아간다
import PropTypes from 'prop-types';
import Link from 'next/link';
//디자인
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import styled from 'styled-components';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import {useSelector} from "react-redux";

//스타일 컴포넌트
const SearchInput = styled(Input.Search)`
  vertical-align: middle;

`;

const OtherLayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>StudyBoard </a></Link>
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
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>

                </Menu.Item>
            </Menu>
            {/*거터라는건 컬럼사이 간격 */}
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    <div style={{width: '70%', margin: '30px auto'  }}>
                        <div>
                            <Link href="/about"><a>About</a></Link>
                        </div>
                        <div>
                            <Link href="/leaderShip"><a>LeaderShip</a></Link>
                        </div>
                        <div>
                            <Link href="/contact"><a>Contact</a></Link>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    { children }
                </Col>
                <Col xs={24} md={6}>
                    Rank
                </Col>
            </Row>
        </div>
    );
};

OtherLayout.propTypes = {
    // 칠드런은 노드입니다 화면에 그릴 수 있는게 노드
    children: PropTypes.node.isRequired,
};

export default OtherLayout;
