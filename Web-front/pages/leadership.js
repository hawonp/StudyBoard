// react imports
import Link from "next/link";

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Card from "@mui/material/Card";

// package imports
import AboutNavigation from "../components/non_functional/AboutNavigation";

// functional component for rendering the leadership page
export default function Leadership() {
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
          <GroupsOutlinedIcon sx={{ fontSize: "5rem" }} />
        </Box>
        <div style={{ fontSize: "45px", marginBottom: "3.2rem" }}>
          Studyboard Leadrship team
        </div>

        <Box sx={{ display: "flex" }}>
          <Card sx={{ margin: "24px", padding: "32px", borderRadius: "8px" }}>
            <div style={{ textAlign: "center" }}>
              <div>
                <img
                  src="images/image1.jpg"
                  width="250px"
                  height="250px"
                  style={{
                    objectFit: "cover",
                    backgroundPosition: "center center",
                  }}
                />
              </div>
              <h3>Hawon Park</h3>
              <span>Project Manager</span>
            </div>
          </Card>

          <Card sx={{ margin: "24px", padding: "32px", borderRadius: "8px" }}>
            <div style={{ textAlign: "center" }}>
              <div>
                <img
                  src="images/image3.jpg"
                  width="250px"
                  height="250px"
                  style={{
                    objectFit: "cover",
                    backgroundPosition: "center center",
                  }}
                />
              </div>
              <h3>Pyungkang Hong</h3>
              <span>UI/UX Front-end</span>
            </div>
          </Card>

          <Card sx={{ margin: "24px", padding: "32px", borderRadius: "8px" }}>
            <div style={{ textAlign: "center" }}>
              <div>
                <img
                  src="images/image2.jpg"
                  width="250px"
                  height="250px"
                  style={{
                    objectFit: "cover",
                    backgroundPosition: "center center",
                  }}
                />
              </div>
              <h3>Jeong ho Shin</h3>
              <span>Lead Programmer</span>
            </div>
          </Card>
        </Box>
      </Box>
    </Box>
  );
} // functional component closure
