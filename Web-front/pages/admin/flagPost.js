import Head from "next/head";
import * as React from "react";
import AdminNav from "../../components/AdminNav";
import AdminPostList from "../../components/AdminPostList";

export default function FlagPosts() {
  return (
    <div style={{ display: "flex" }}>
      {/*Admin Navigation*/}
      <AdminNav />

      {/*Admin Replies Report List*/}
      <AdminPostList />
    </div>
  );
}
