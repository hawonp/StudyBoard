import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import RankUserList from "../components/RankUserList";

export default function SearchResult() {
  return (
    <>
      <Container>
        <h4>Posts</h4>
        <h4>Tags</h4>
      </Container>
    </>
  );
}
