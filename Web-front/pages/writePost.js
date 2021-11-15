import * as React from "react";
import Head from "next/head";
import { WritePost } from "../components/WritePost";

export default function WritePost() {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <WritePost />
    </div>
  );
}
