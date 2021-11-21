import Head from "next/head";
import { Pagination } from "@mui/material";
import React from "react";

export default function PaginationButton({ maxPageCount, setPage, page }) {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <Pagination
        count={maxPageCount}
        variant="outlined"
        color="primary"
        onChange={setPage}
        page={page}
      />
    </div>
  );
}
