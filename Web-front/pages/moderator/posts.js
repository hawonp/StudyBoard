// react imports
import * as React from "react";

// package imports
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedPostsList from "../../components/moderator/ReportedPostsList";

// page for rendering reported posts
export default function Posts() {
  return (
    <div style={{ display: "flex" }}>
      {/* navigation component */}
      <ModeratorNavigation />

      {/* reported posts component*/}
      <ReportedPostsList />
    </div>
  );
} // functional component closure
