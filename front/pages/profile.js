import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followingList = [{ nickname:'pk1'}, {nickname: '바보'}, {nickname: 'pk2'}];
    const followerList = [{ nickname:'pk1'}, {nickname: '바보'}, {nickname: 'pk2'}];

    return(
        <>
            <Head>
                <title>Study Board | Profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="Follow List" data={followingList} />
                <FollowList header="Follower List" data={followerList} />
            </AppLayout>
        </>
    );
}

export default Profile;