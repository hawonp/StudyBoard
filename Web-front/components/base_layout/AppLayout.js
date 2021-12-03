// react imports
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// MUI imports
import CustomAppBar from "../app_bar/CustomAppBar";
import { useMediaQuery } from "@mui/material";

// general app layout
const AppLayout = ({ children }) => {
  const isBig = useMediaQuery("(min-width:850px)"); // use for responsive resizing

  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <CustomAppBar />
      <Box
        sx={{ display: "flex", flex: 1, backgroundColor: "rgb(242,245,249)" }}
      >
        <Grid container spacing={2}>
          {isBig ? (
            <Grid item xs={2}>
              {/* should be empty */}
            </Grid>
          ) : (
            <></>
          )}

          <Grid item xs={isBig ? 8 : 12}>
            {children}
          </Grid>

          {isBig ? (
            <Grid item xs={2}>
              {/* should be empty */}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </Box>
  );
}; //end of functional component

export default AppLayout;
