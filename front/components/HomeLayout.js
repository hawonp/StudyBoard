import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Input, Menu, } from 'antd';
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const HomeLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>StudyBaord</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>Profile</a></Link>
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
                {/*<Menu.Item key="mail">*/}
                {/*    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />*/}
                {/*</Menu.Item>*/}
            </Menu>
            <div gutter={8}>
                { children }
            </div>

        </div>
    );
};

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HomeLayout;