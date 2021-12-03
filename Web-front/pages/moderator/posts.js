import Head from "next/head";
import * as React from "react";
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedPostsList from "../../components/moderator/ReportedPostsList";

export default function Posts() {
  return (
    <div style={{ display: "flex" }}>
      {/*Moderator Navigation*/}
      <ModeratorNavigation />

      {/*Moderators can see the list of reported posts*/}
      <ReportedPostsList />
    </div>
  );
}
