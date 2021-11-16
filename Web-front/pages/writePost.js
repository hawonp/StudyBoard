import * as React from "react";
import Head from "next/head";
import { PostWrite } from "../components/PostWrite";

export default function WritePost() {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <PostWrite />
    </div>
  );
}
