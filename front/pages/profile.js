import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>Study Board | Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="Follow List" data={me.Followings} />
        <FollowList header="Follower List" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
