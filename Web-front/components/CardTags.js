import React from 'react';
import Link from 'next/link';

// 해시태그 정규표현식
const CardTags = ({ postData }) => (
    <div>
        {postData.split(/(#[^\s#]+)/g).map((tags) => {
            if (tags.match(/(#[^\s]+)/)) {
                return (
                    <Link href={`/hashtag/${tags.slice(1)}`}>
                        <a>{tags}</a>
                    </Link>
                );
            }

            return v;
        })}
    </div>
);
