// react imports
import * as React from "react";

// package imports
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedRepliesList from "../../components/moderator/ReportedRepliesList";

// page for rendering list of report replies
export default function Replies() {
  return (
    <div style={{ display: "flex" }}>
      {/* navigation component */}
      <ModeratorNavigation />

      {/* reported replies component*/}
      <ReportedRepliesList />
    </div>
  );
} // functional component closure
