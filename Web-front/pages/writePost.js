import * as React from "react";
import Head from "next/head";
import { CreatePost } from "../components/CreatePost";

export default function WritePost() {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <CreatePost />
    </div>
  );
}
