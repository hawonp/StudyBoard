import { Link, Typography } from "@mui/material";
import React from "react";

export default function NavButton({ to, title, sx }) {
  return (
    <Link href={to} variant="h6" underline="none" color="black" sx={sx}>
      <Typography>{title}</Typography>
    </Link>
  );
}
