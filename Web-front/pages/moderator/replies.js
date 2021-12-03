import Head from "next/head";
import * as React from "react";
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedRepliesList from "../../components/moderator/ReportedRepliesList";

export default function Replies() {
  return (
    <div style={{ display: "flex" }}>
      {/*Moderator Navigation*/}
      <ModeratorNavigation />

      {/*Moderator can see the list of reported replies*/}
      <ReportedRepliesList />
    </div>
  );
}
