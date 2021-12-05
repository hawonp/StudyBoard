// react imports
import * as React from "react";
import Head from "next/head";

// package imports
import { PostWrite } from "../../components/post/PostWrite";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// functional component that renders the post creation page
export default withPageAuthRequired(function Write() {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <PostWrite />
    </div>
  );
}); // functional component closure
