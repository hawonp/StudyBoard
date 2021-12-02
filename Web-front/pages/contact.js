import Head from "next/head";
import AboutPageNav from "../components/AboutPageNav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import FaxIcon from "@mui/icons-material/Fax";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import Card from "@mui/material/Card";
import image from "next/image";
import Paper from "@mui/material/Paper";

export default function Contact() {
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
          <DraftsOutlinedIcon sx={{ fontSize: "5rem" }} />
        </Box>
        <div style={{ fontSize: "45px", marginBottom: "3.2rem" }}>
          {"Contact Studyboard & Feedback"}
        </div>

        <Box sx={{ display: "flex" }}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "140px",
              width: "170px",
              margin: "24px",
              padding: "30px",
            }}
          >
            <div>
              <FmdGoodIcon sx={{ fontSize: "3rem" }} />
            </div>
            <div>something</div>
            <div>information</div>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "140px",
              width: "170px",
              margin: "24px",
              padding: "30px",
            }}
          >
            <div>
              <MailIcon sx={{ fontSize: "3rem" }} />
            </div>
            <div>something</div>
            <div>information</div>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "140px",
              width: "170px",
              margin: "24px",
              padding: "30px",
            }}
          >
            <div>
              <CallIcon sx={{ fontSize: "3rem" }} />
            </div>
            <div>something</div>
            <div>information</div>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "140px",
              width: "170px",
              margin: "24px",
              padding: "30px",
            }}
          >
            <div>
              <FaxIcon sx={{ fontSize: "3rem" }} />
            </div>
            <div>something</div>
            <div>information</div>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
