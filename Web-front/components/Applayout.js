import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import CustomAppBar from "./CustomAppBar";

const AppLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <CustomAppBar />
      <Box
        sx={{ display: "flex", flex: 1, backgroundColor: "rgb(242,245,249)" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {/* should be empty */}
          </Grid>
          <Grid item xs={8}>
            {children}
          </Grid>

          <Grid item xs={2}>
            {/* should be empty */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AppLayout;
