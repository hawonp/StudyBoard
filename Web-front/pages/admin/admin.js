import Head from "next/head";
import * as React from "react";
import AdminNav from "../../components/AdminNav";
import AdminUserList from "../../components/AdminUserList";

export default function Admin() {
  return (
    <div style={{ display: "flex" }}>
      {/*Admin Navigation*/}
      <AdminNav />

      {/*Admin Report User list & block List*/}
      <AdminUserList />
    </div>
  );
}
