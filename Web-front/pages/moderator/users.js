// react imports
import * as React from "react";

// package imports
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedUserList from "../../components/moderator/ReportedUserList";

// page for rendering list of users with 10 or more active reports
export default function Users() {
  return (
    <div style={{ display: "flex" }}>
      {/* navigation component */}
      <ModeratorNavigation />

      {/* reported users component */}
      <ReportedUserList />
    </div>
  );
}
