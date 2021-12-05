// react imports
import Link from "next/link";

// MUI imports
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

// functional component that renders the error 500 page
export default function Error_500_page() {
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
          500
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
          Bad Server Request
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
} // functional component closure
