// react imports
import Link from "next/link";

// MUI imports
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// package imports
import navStyles from "../styles/Nav.module.css";
import AboutNavigation from "../components/non_functional/AboutNavigation";

// functional component for rendering the base About Page
export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./images/hero-bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          marginTop: ".8rem",
          marginBottom: "2rem",
          padding: "1rem 1rem",
          MaxWidth: "1450px",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginRight: "0.5rem", borderRadius: "20px" }}
        >
          <Link href="/about">
            <a style={{ textDecoration: "none", color: "#3f8cb8" }}>
              <div>About Us</div>
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
              <div>Contact Us</div>
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
        <Box>
          <AutoStoriesIcon sx={{ fontSize: "5rem" }} />
        </Box>
        <div style={{ fontSize: "45px", marginBottom: "3.2rem" }}>
          About StudyBoard
        </div>
        <div className={navStyles.box}>
          <p className={navStyles.line}>
            <h2>Why StudyBoard?</h2>
            StudyBoard is committed to providing the highest quality questions
            and replies.
          </p>
          <p className={navStyles.line}>
            <h2>How to use StudyBoard?</h2>
            Authenticate with industry standard Auth0. Ask a question. Recieve
            replies from the entire community
          </p>
          {/* <p className={navStyles.line}>
            <h2>What do we provide?</h2>
            StudyBoard provide system that gives quick answers to questions that
            users are curious about. The user can know by notification when
            another user answers the question he or she wrote.
          </p> */}
          <p className={navStyles.line}>
            <h2>Rank Up!</h2>
            Gain points as you ask and answer lots of questions, eventually
            becoming an endorsed user whose word counts for more.
          </p>
          <p className={navStyles.line}>
            <h2>Search for More! </h2>
            Use the unified searchbar to search for both tags and posts of your
            liking.
          </p>
          <p className={navStyles.line}>
            <h2>Report Bad Apples</h2>
            Report any question or reply that you think is inappropriate. A
            moderator will review it immediately!
          </p>
          <p className={navStyles.line}>
            <h2>Save Time and Effort</h2>
            Bookmark questions that you like. Easily peruse questions you've
            posted. Filter the feed to your liking!
          </p>
        </div>
      </Box>
    </Box>
  );
} // functional component closure
