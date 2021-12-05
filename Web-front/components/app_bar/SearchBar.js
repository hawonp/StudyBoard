// react imports
import React, { useState } from "react";
import { useRouter } from "next/router";

// MUI imports
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// package imports
import axiosInstance from "../../utils/routeUtil";

// constants
const SEARCHPREVIEW = "/search/preview";

// Search bar styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 20,
  marginRight: 20,
  flex: 1,
}));

// functional component for search previews
export default function SearchBar() {
  const router = useRouter(); // used for redirection
  const [searchResults, setSearchResults] = useState([]); // search results data state
  const [inputValue, setInputValue] = useState(""); // user keystroke input data state

  // when the user has typed something in the search bar
  function handleInputChange(event, value) {
    if (value == null) {
      setSearchResults([]);
    }
    axiosInstance
      .get(SEARCHPREVIEW, {
        params: {
          input: value,
        },
      })
      .then((response) => {
        setSearchResults(response["data"]);
      })
      .catch((e) => {
        const resp = e.response;
        if (resp["status"] == 400) {
          // do nothing, error 400 would mean that nothing is in the search bar
        } else if (resp["status"] == 500) {
          router.push("/" + "error/500");
        }
      });
    setInputValue(value);
  }

  // when the user has selected an item in the search preview list
  function handleSelection(event, value) {
    if (value != null) {
      const type = value["type"];
      const id = value["id"];

      if (type == "tag") {
        router.push("../tags/" + value["text"]);
      } else {
        router.push("../posts/" + id);
      }
    }
  }

  // when the user clears his search results
  function handleClear(event, value) {
    setSearchResults([]);
  }

  // when the user presses enter on some keyboard input
  function handleEnter() {
    router.push("../search/" + inputValue);
  }

  return (
    <Search>
      <Autocomplete
        disablePortal
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
