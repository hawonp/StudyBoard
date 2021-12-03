import Head from "next/head";
import Image from "next/image";
import { Box, Button, Card } from "@mui/material";
import { fontSize, padding } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import image from "../public/images/hero-img.png";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* seciton 1 */}
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
            We are providing the homework and question solutions{" "}
          </div>
          <Button
            variant="outlined"
            href="/board"
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

      {/* seciton 2 */}
      <Box
        sx={{
          marginTop: "5rem",
        }}
      >
        <div style={{ fontSize: "1.2rem", textAlign: "center" }}>
          Our values
        </div>
        <div style={{ fontSize: "4rem", textAlign: "center" }}>
          Something information
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
              <span>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </span>
            </div>
          </Card>

          <Card sx={{ margin: "0.5rem", boxShadow: "0 3px 110px lightgray" }}>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div>
                <img src="images/values-2.png" width="300px" height="300px" />
              </div>
              <h3>Fast answer</h3>
              <span>
                Repudiandae amet nihil natus in distinctio suscipit id.
                Doloremque ducimus ea sit non.
              </span>
            </div>
          </Card>

          <Card sx={{ margin: "0.5rem", boxShadow: "0 3px 110px lightgray" }}>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div>
                <img src="images/values-3.png" width="300px" height="300px" />
              </div>
              <h3>Time Save</h3>
              <span>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </span>
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
}
