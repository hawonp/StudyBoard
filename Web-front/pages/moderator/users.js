import Head from "next/head";
import * as React from "react";
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedUserList from "../../components/moderator/ReportedUserList";

export default function Users() {
  return (
    <div style={{ display: "flex" }}>
      {/*Moderator Navigation*/}
      <ModeratorNavigation />

      {/*Moderator can see the list of users with 10 or more active reports*/}
      <ReportedUserList />
    </div>
  );
}
