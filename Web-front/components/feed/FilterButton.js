// react imports
import * as React from "react";

// MUI imports
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";

// functional component for sorting and filtering the feed
export default function FilterButton({
  user,
  handleSortClick,
  handleFilterChange,
  filter,
}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Most Recent"
        component="a"
        href="#Most-Recent"
        variant="outlined"
        clickable
        onClick={() => handleSortClick(0)}
      />
      <Chip
        label="Most popular"
        component="a"
        href="#Most-popular"
        variant="outlined"
        clickable
        onClick={() => handleSortClick(1)}
      />

      {user ? (
        <Select
          sx={{
            fontSize: "0.8rem",
            borderRadius: "16px",
            maxWidth: "auto",
            maxHeight: "32px",
          }}
          labelId="preferred tags"
          id="preferred tags"
          variant="outlined"
          value={filter}
          onChange={(event) => handleFilterChange(event.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>Preferred</MenuItem>
        </Select>
      ) : (
        <></>
      )}
    </Stack>
  );
} // functional component closure
