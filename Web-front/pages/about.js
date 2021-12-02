import Head from "next/head";
import Link from "next/link";
import AboutPageNav from "../components/AboutPageNav";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import navStyles from "../styles/Nav.module.css";

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
          // MaxWidth: "1450px",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginRight: "0.5rem", borderRadius: "20px" }}
        >
          <Link href="/about">
            <a style={{ textDecoration: "none", color: "#3f8cb8" }}>
              <div>About</div>
            </a>
          </Link>
        </Button>
        <Button
          variant="outlined"
          sx={{ marginRight: "0.5rem", borderRadius: "20px" }}
        >
          <Link href="/leadership">
            <a style={{ textDecoration: "none", color: "#3f8cb8" }}>
              <div>Leadership</div>
            </a>
          </Link>
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "20px" }}>
          <Link href="/contact">
            <a style={{ textDecoration: "none", color: "#3f8cb8" }}>
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
          // boxShadow: "0 2px 10px lightgray",
        }}
      >
        <Box>
          <AutoStoriesIcon sx={{ fontSize: "5rem" }} />
        </Box>
        <div style={{ fontSize: "45px", marginBottom: "3.2rem" }}>
          About StudyBoard
        </div>
        <div className={navStyles.box}>
          <p className={navStyles.line}>
            <h2>Why do you need our service?</h2>
            StudyBoard's community-based, information-providing service to
            answer your questions is like no other.
          </p>
          <p className={navStyles.line}>
            <h2>How to use our service?</h2>
            Ask any question and recieve replies from a <br /> wide variety of
            knowledgeable people!
          </p>
          <p className={navStyles.line}>
            <h2>Something</h2>
            something need to put it in
          </p>
          <p className={navStyles.line}>
            <h2>Something</h2>
            something need to put it in
          </p>
          <p className={navStyles.line}>
            <h2>Something</h2>
            something need to put it in
          </p>
        </div>
      </Box>
    </Box>
  );
}
