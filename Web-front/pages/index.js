// MUI imports
import { Box, Button, Card } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// functional component that renders the home page
export default function Home() {
  return (
    <>
      {/* section 1 */}
      <Box
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./images/hero-bg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",

            flexDirection: "column",
            flex: 1,
          }}
        >
          <div style={{ fontSize: "4rem", color: "#263179" }}>
            Welcome to StudyBoard!
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              color: "#3F8CB8",
              marginTop: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            A place to ask questions and receive answers
          </div>
          <Button
            variant="outlined"
            href="/feed"
            size="large"
            sx={{ width: "15rem" }}
          >
            <div style={{ display: "flex" }}>
              Get Started <ArrowRightAltIcon />
            </div>
          </Button>
        </div>

        <Box
          style={{
            width: "55%",
            height: "55%",
            backgroundImage: "url('./images/hero-img.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></Box>
      </Box>

      {/* section 2 */}
      <Box
        sx={{
          marginTop: "5rem",
        }}
      >
        <div
          style={{ fontSize: "1.2rem", textAlign: "center", color: "#263179" }}
        >
          Our values
        </div>
        <div
          style={{ fontSize: "2.2rem", textAlign: "center", color: "#3F8CB8" }}
        >
          As the most trusted knowledge sharing and collaboration platform,
          <br />
          StudyBoard has three core values:
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <Card
            sx={{
              flex: 1,
              margin: "0.5rem",
              boxShadow: "0 3px 110px lightgray",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "24px",
              }}
            >
              <div>
                <img src="images/values-1.png" width="300px" height="300px" />
              </div>
              <h3>Global Reach</h3>
              <p style={{ display: "flex " }}>
                StudyBoard is available to anyone across the globe with no
                restrictions on usage nor price
              </p>
            </div>
          </Card>

          <Card
            sx={{
              flex: 1,
              margin: "0.5rem",
              boxShadow: "0 3px 110px lightgray",
            }}
          >
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div>
                <img src="images/values-2.png" width="300px" height="300px" />
              </div>
              <h3>Powerful Searching</h3>
              <p style={{ display: "flex " }}>
                Users can search for both posts and tags in a unified search bar
                as a quick and easy way to find what they'd like to know
              </p>
            </div>
          </Card>

          <Card
            sx={{
              flex: 1,
              margin: "0.5rem",
              boxShadow: "0 3px 110px lightgray",
            }}
          >
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div>
                <img src="images/values-3.png" width="300px" height="300px" />
              </div>
              <h3>Time-Saving</h3>
              <p style={{ display: "flex " }}>
                Users can ask questions and receive endorsed replies to help
                them on their way
              </p>
            </div>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: " 7rem",
            color: "#3F8CB8",
            background: "white",
          }}
        >
          Copyright © 2021 StudyBoard
        </Box>
      </Box>
    </>
  );
} // functional component closure
