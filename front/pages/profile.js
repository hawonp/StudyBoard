import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Study Board | Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList data={me.Posts} header="Post List" />
        <FollowList header="Follow List" data={me.Followings} />
        <FollowList header="Follower List" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
