// react imports
import * as React from "react";

// package imports
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedRepliesList from "../../components/moderator/ReportedRepliesList";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// page for rendering list of report replies
export default withPageAuthRequired(function Replies() {
  return (
    <div style={{ display: "flex" }}>
      {/* navigation component */}
      <ModeratorNavigation />

      {/* reported replies component*/}
      <ReportedRepliesList />
    </div>
  );
}); // functional component closure
