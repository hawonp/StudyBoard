import React from 'react';
// npm i prop-tyeps 설치를 해줘야지 돌아간다
import PropTypes from 'prop-types';
import Link from 'next/link';


const AppLayout = ({ children }) => {
    return(
        <div>
            <div>
                <Link href="/"><a>studyboard </a></Link>
                <Link href="/profile"><a>Profile </a></Link>
                <Link href="/about"><a>About </a></Link>
                <Link href="/signup"><a>회원가입 </a></Link>
            </div>
            { children }
        </div>
    );
};

AppLayout.propTypes = {
    // 칠드런은 노드입니다 화면에 그릴 수 있는게 노드
    children: PropTypes.node.isRequired,
};

export default AppLayout;