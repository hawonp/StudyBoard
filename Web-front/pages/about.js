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
            Easy to log in with Google!
            <br /> Ask a question <br />
            Recieve replies from the entire community
          </p>
          <p className={navStyles.line}>
            <h2>What do we provide?</h2>
            StudyBoard provide system that gives quick answers to questions that
            users are curious about. The user can know by notification when
            another user answers the question he or she wrote.
          </p>
          <p className={navStyles.line}>
            <h2>How do I get into the rank? </h2>
            When a user answers a lot of questions and gives a definite answer,
            it automatically becomes endorsed user when receiving a large number
            of likes from other users.
          </p>
          <p className={navStyles.line}>
            <h2>Easy to find result </h2>
            When a user writes the search he or she wants to find in the search
            box, user lists tags and posts. Users can see the writings they want
            at once.
          </p>
          <p className={navStyles.line}>
            <h2>Reliable</h2>
            Our website can report inappropriate questions and comments
            anonymously. For a clean website, the administrator directly manages
            the website. User cannot know who reported who users are
          </p>
          <p className={navStyles.line}>
            <h2>Reduce your time and effort</h2>
            Users can get more answers with a single question.In addition, users
            can select the tags they want and collect and view only the tags
            they want. Users can see more questions and results in filter
            section.
          </p>
        </div>
      </Box>
    </Box>
  );
} // functional component closure
