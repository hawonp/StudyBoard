import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import RankUserList from "../components/RankUserList";

export default function Rank() {
  return (
    <div>
      <Container>
        <Box
          style={{
            backgroundColor: "white",
          }}
        >
          <h1 style={{ textAlign: "center", paddingTop: "1rem" }}>
            🔱TOP RANK🔱
          </h1>
          <hr
            style={{
              margin: "0px",
              flexShrink: "0",
              borderWidth: "0px 0px thin",
              borderStyle: "solid",
              marginBottom: "10px",
              opacity: 1,
              borderColor: "lightgray",
            }}
          />

          <RankUserList />
        </Box>
      </Container>
    </div>
  );
}
