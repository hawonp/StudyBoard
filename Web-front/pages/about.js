import Head from "next/head";
import Link from "next/link";
import AboutPageNav from "../components/AboutPageNav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: ".8rem",
          marginBottom: "2rem",
          padding: "1rem 1rem",
        }}
      >
        <Button
          variant="contained"
          sx={{ marginRight: "0.5rem", borderRadius: "20px" }}
        >
          <Link href="/about">
            <a style={{ textDecoration: "none", color: "white" }}>
              <div>About</div>
            </a>
          </Link>
        </Button>
        <Button
          variant="contained"
          sx={{ marginRight: "0.5rem", borderRadius: "20px" }}
        >
          <Link href="/leadership">
            <a style={{ textDecoration: "none", color: "white" }}>
              <div>Leadership</div>
            </a>
          </Link>
        </Button>
        <Button variant="contained" sx={{ borderRadius: "20px" }}>
          <Link href="/contact">
            <a style={{ textDecoration: "none", color: "white" }}>
              <div>Contact</div>
            </a>
          </Link>
        </Button>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>icon</Box>
        <Box>Studyboard Leadrship team</Box>
        <Box sx={{ display: "flex" }}>
          <Box>하원</Box>
          <Box>평강</Box>
          <Box>정호</Box>
        </Box>
      </Box>
    </Box>
  );
}
