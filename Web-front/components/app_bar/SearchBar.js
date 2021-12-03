import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Router from "next/router";

import axiosInstance from "../../utils/routeUtil";
const SEARCHPREVIEW = "/search/preview";

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
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event, value) {
    if (value == null) {
      console.log("hello");
      setSearchResults([]);
    }
    console.log(value);
    axiosInstance
      .get(SEARCHPREVIEW, {
        params: {
          input: value,
        },
      })
      .then((response) => {
        // console.log(response["data"]);
        // setSearchResults(response);
        // console.log(response["data"].flat());
        setSearchResults(response["data"]);
      })
      .catch((e) => {
        console.log(e);
        const resp = e.response;
        if (resp["status"] == 400) {
          console.log("oh no");
        }
      });
    // console.log(event);
    setInputValue(value);
  }

  function handleSelection(event, value) {
    console.log("user has selected", value);
    if (value != null) {
      const type = value["type"];
      const id = value["id"];

      if (type == "tag") {
        console.log("User selected a tag");
        console.log("go to this tag page");
        Router.push("../tags/" + value["text"]);
      } else {
        console.log("User selected a post ", value["text"]);
        const postID = value["id"];
        Router.push("../posts/" + id);
      }
    }

    // console.log(value.split("]"));
  }

  function handleClear(event, value) {
    setSearchResults([]);
  }

  function handleEnter() {
    console.log("user has pressed enter on value ", inputValue);
    Router.push("../search/" + inputValue);
  }

  return (
    <Search>
      <Autocomplete
        disablePortal
        // freesolo
        id="combo-box-demo"
        options={searchResults}
        sx={{ width: "auto" }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleSelection}
        onClose={handleClear}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // Prevent's default 'Enter' behavior.
            event.defaultMuiPrevented = true;
            // your handler code
            handleEnter();
          }
        }}
        groupBy={(option) => option.type.toString()}
        getOptionLabel={(option) => option.text.toString()}
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
} //functional component closure