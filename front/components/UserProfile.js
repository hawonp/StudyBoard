import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
    const { user, isLoggingOut } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(logoutRequestAction);
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">POST<br />{user.Posts.length}</div>,
                <div key="following">Following<br />{user.Followings.length}</div>,
                <div key="follower">Follow<br />{user.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{user.nickname[0]}</Avatar>}
                title={user.nickname}
            />
            <Button onClick={onLogout} loading={isLoggingOut}>Log Out</Button>
        </Card>
    );
};

export default UserProfile;