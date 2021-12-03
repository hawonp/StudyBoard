// react imports
import React from "react";

// MUI imports
import { Link, Typography } from "@mui/material";

// functional component for the navigation buttons (when on a bigger screen)
export default function NavButton({ to, title, sx }) {
  return (
    <Link href={to} variant="h6" underline="none" color="black" sx={sx}>
      <Typography>{title}</Typography>
    </Link>
  );
} //functional component closure
