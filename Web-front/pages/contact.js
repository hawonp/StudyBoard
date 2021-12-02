import Head from "next/head";
import AboutPageNav from "../components/AboutPageNav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import MailIcon from "@mui/icons-material/Mail";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import Card from "@mui/material/Card";
import image from "next/image";
import Paper from "@mui/material/Paper";

const PaperWrapper = ({ style, children }) => {
  return (
    <Box
      elevation={3}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "200px",
        margin: "24px",
        padding: "30px",
        boxShadow: "0 3px 100px lightgray",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </Box>
  );
};

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
          <PaperWrapper>
            <div>
              <FmdGoodIcon sx={{ fontSize: "3rem" }} />
            </div>
            <strong style={{ marginBottom: "0.3rem" }}>Our Office</strong>
            <div>28,Songdo-ro, Inchun, Korea</div>
          </PaperWrapper>

          <PaperWrapper>
            <div>
              <MailIcon sx={{ fontSize: "3rem" }} />
            </div>
            <strong style={{ marginBottom: "0.3rem" }}>EMAIL</strong>
            <br />

            <div>studyboard@gmail.com</div>
          </PaperWrapper>

          <PaperWrapper>
            <div>
              <CallIcon sx={{ fontSize: "3rem" }} />
            </div>
            <strong style={{ marginBottom: "0.3rem" }}>PHONE NUMBER</strong>
            <br />
            <div>(010)-9604-8926</div>
          </PaperWrapper>

          <PaperWrapper>
            <div>
              <AppShortcutIcon sx={{ fontSize: "3rem" }} />
            </div>
            <strong style={{ marginBottom: "0.3rem" }}>Kakao Talk</strong>
            <br />
            <div>
              <Link href="https://open.kakao.com/o/scMBH5Md">
                <a>
                  <LinkIcon />
                </a>
              </Link>
            </div>
          </PaperWrapper>
        </Box>
      </Box>
    </Box>
  );
}
