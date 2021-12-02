import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingProgress() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={150} sx={{ marginBottom: "1.2rem" }} />
      <div style={{ fontSize: "1.2rem" }}>Wait for second.. </div>
      <div style={{ fontSize: "1.2rem" }}>Loading ... </div>
    </Box>
  );
}
