import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faCode, faStar, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import { logoutRequestAction } from '../reducers/user';
import FollowButton from './FollowButton';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      className="login-fh5co"
      actions={[
        <div key="twit">Posts<br />{me.Posts.length}</div>,
        <div key="following">Following<br />{me.Followings.length}</div>,
        <div key="follower">Follow<br />{me.Followers.length}</div>,
      ]}
      // extra={id && <FollowButton post={post} />}
      extra={<Link href="/user"><Button block style={{ borderRadius: '8px' }}><a><FontAwesomeIcon icon={faUserShield} style={{ color: 'darkred', width: '20px' }} /></a></Button></Link>}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading={logOutLoading}>Log Out</Button>
    </Card>
  );
};

export default UserProfile;
