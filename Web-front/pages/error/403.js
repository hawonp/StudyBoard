import { Container } from "@mui/material";
import Link from "next/link";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Button from "@mui/material/Button";
export default function Error_403_page() {
  return (
    <Container>
      <div
        style={{
          margin: "auto",
          height: "600px",
          width: "600px",
          position: "relative",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: "11rem",
            position: "absolute",
            left: "27%",
            top: "8%",
          }}
        >
          403
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
            position: "absolute",
            left: " 16%",
            top: " 45%",
            width: " 75%",
          }}
        >
          You are not authorized for this request!
          <Button sx={{ borderRadius: "20px" }} variant="text" color="success">
            <Link href="/">
              <a style={{ textDecoration: "none", color: "blue" }}>
                Click Here to go Back Home{" "}
              </a>
            </Link>
          </Button>{" "}
        </div>
      </div>
    </Container>
  );
}
