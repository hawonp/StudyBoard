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
            Welcome to StudyBoard
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              color: "#3F8CB8",
              marginTop: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            We are providing the homework and question solutions
          </div>
          <Button
            variant="outlined"
            href="/feed"
            size="large"
            sx={{ width: "15rem" }}
          >
            <div style={{ display: "flex" }}>
              Get stared <ArrowRightAltIcon />
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
          <Card sx={{ margin: "0.5rem", boxShadow: "0 3px 110px lightgray" }}>
            <div
              style={{
                textAlign: "center",
                padding: "24px",
              }}
            >
              <div>
                <img src="images/values-1.png" width="300px" height="300px" />
              </div>
              <h3>Global website</h3>
              <p>
                It is available to people around the world and allows users to
                freely answer questions. User can use it for free this platfrom
              </p>
            </div>
          </Card>

          <Card sx={{ margin: "0.5rem", boxShadow: "0 3px 110px lightgray" }}>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div>
                <img src="images/values-2.png" width="300px" height="300px" />
              </div>
              <h3>Searching</h3>
              <p>
                User can find the topic that the user is curious about. User can
                see the tags and post separately in the search bar organizedly.
              </p>
            </div>
          </Card>

          <Card sx={{ margin: "0.5rem", boxShadow: "0 3px 110px lightgray" }}>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div>
                <img src="images/values-3.png" width="300px" height="300px" />
              </div>
              <h3>Time Save</h3>
              <p>
                Users quickly ask questions what they do not know and receive
                answers quickly. User can handle their problems quickly.
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
          Copyright © CSE 416 The StudyBoard
        </Box>
      </Box>
    </>
  );
} // functional component closure
