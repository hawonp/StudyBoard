import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import axiosInstance from "../utils/routeUtil";
const POST_FEED = "/feed/posts";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 20,
  marginRight: 20,
  flex: 1,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);

  function handleInputChange(event, value) {
    if (value == null) {
      console.log("hello");
      setSearchResults([]);
    }
    console.log(value);
    axiosInstance
      .get(POST_FEED + "/search", {
        params: {
          input: value,
        },
      })
      .then((response) => {
        console.log(response["data"]);
        // setSearchResults(response);
        console.log(response["data"].flat());
        setSearchResults(response["data"].flat());
      })
      .catch((e) => {
        console.log(e);
        const resp = e.response;
        if (resp["status"] == 400) {
          console.log("oh no");
        }
      });
    // console.log(event);
  }

  function handleSelection(event, value) {
    console.log("user has selected", value);
  }

  function handleClear(event, value) {
    setSearchResults([]);
  }

  return (
    <Search>
      <Autocomplete
        disablePortal
        freesolo
        id="combo-box-demo"
        options={searchResults}
        sx={{ width: "auto" }}
        onInputChange={handleInputChange}
        onChange={handleSelection}
        onClose={handleClear}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            placeholder="Search for what you want"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Search>
  );
}
