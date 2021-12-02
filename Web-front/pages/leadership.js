import Head from "next/head";
import AboutPageNav from "../components/AboutPageNav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from "next/link";
import Card from "@mui/material/Card";
import image from "next/image";

export default function Leadership() {
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
          MaxWidth: "1450px",
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
                <img src="images/image1.jpg" width="250px" height="250px" />
              </div>
              <h3>Hawon Park</h3>
              <span>Project Manager</span>
            </div>
          </Card>

          <Card sx={{ margin: "24px", padding: "32px", borderRadius: "8px" }}>
            <div style={{ textAlign: "center" }}>
              <div>
                <img src="images/image3.jpg" width="250px" height="250px" />
              </div>
              <h3>Pyungkang Hong</h3>
              <span>Front-end UI/UX</span>
            </div>
          </Card>

          <Card sx={{ margin: "24px", padding: "32px", borderRadius: "8px" }}>
            <div style={{ textAlign: "center" }}>
              <div>
                <img src="images/image2.jpg" width="250px" height="250px" />
              </div>
              <h3>Jeong ho Shin</h3>
              <span>Lead Programmer</span>
            </div>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
