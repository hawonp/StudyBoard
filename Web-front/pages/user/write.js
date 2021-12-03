import * as React from "react";
import Head from "next/head";
import { PostWrite } from "../../components/post/PostWrite";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Write() {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <PostWrite />
    </div>
  );
});
