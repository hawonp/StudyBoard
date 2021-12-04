// react imports
import * as React from "react";

// package imports
import ModeratorNavigation from "../../components/moderator/ModeratorNavigation";
import ReportedUsersList from "../../components/moderator/ReportedUsersList";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// page for rendering list of users with 10 or more active reports
export default withPageAuthRequired(function Users() {
  return (
    <div style={{ display: "flex" }}>
      {/* navigation component */}
      <ModeratorNavigation />

      {/* reported users component */}
      <ReportedUsersList />
    </div>
  );
}); // functional component closure
