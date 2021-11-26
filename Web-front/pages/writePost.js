import * as React from "react";
import Head from "next/head";
import { PostWrite } from "../components/PostWrite";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function WritePost() {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <PostWrite />
    </div>
  );
});
