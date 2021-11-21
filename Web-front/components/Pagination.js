import Head from "next/head";
import { Pagination } from "@mui/material";
import React from "react";

export default function PaginationButton({ maxPageCount, page, setPage }) {
  return (
    <div>
      <Head>
        <title>StudyBoard</title>
      </Head>

      <Pagination
        count={maxPageCount}
        variant="outlined"
        color="primary"
        page={page}
        onChange={setPage}
        size="large"
      />
    </div>
  );
}
