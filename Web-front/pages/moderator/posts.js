// react imports
import * as React from "react";

// package imports
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedPostsList from "../../components/moderator/ReportedPostsList";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// page for rendering reported posts
export default withPageAuthRequired(function Posts() {
  return (
    <div style={{ display: "flex" }}>
      {/* navigation component */}
      <ModeratorNavigation />

      {/* reported posts component*/}
      <ReportedPostsList />
    </div>
  );
}); // functional component closure
