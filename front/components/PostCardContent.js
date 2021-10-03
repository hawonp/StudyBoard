import React from 'react';
import Link from 'next/link';
import PropTypes from "prop-types";

//해시태그 정규표현식
const PostCardContent = ({ postData }) => (
    <div>
        {postData.split(/(#[^\s#]+)/g).map((v) => {
            if(v.match(/(#[^\s]+)/)) {
                return <Link href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
            }

          return v;
        })}
    </div>
);

PostCardContent.propTypes = {postData: PropTypes.string.isRequired,};

export default PostCardContent;