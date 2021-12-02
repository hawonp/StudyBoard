import * as React from "react";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";
import Link from "next/link";
//Importing MUI
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import LoadingProgress from "../components/Loading";
//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const users = "/users/";

export default function EditProfile({ profile }) {
  const { email, nick, tag } = profile;

  const [inputNick, setInputNick] = useState(nick);
  const [inputTag, setInputTag] = useState(tag.flat().toString());
  console.log(inputTag);
  const { user, error, isLoading } = useUser();
  const saveProfile = async () => {
    const formattedTags = inputTag
      .split(",")
      .map((unadjustedTag) =>
        unadjustedTag.trim().replace(/\s+/g, "-").toLowerCase()
      );
    axiosInstance
      .put(users + user.sub, {
        params: {
          user_nickname: inputNick,
          user_tags: formattedTags,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        if (responseData == 1) {
          Router.push("/user/profile");
        }
      })
      .catch((e) => {
        const resp = e.response;
        console.log(resp);
      });
  };

  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  return (
    <Box
      sx={{
        border: "0.1rem solid lightgray",
        borderRadius: "4px",
        marginBottom: "16px",
        marginTop: "20px",
        padding: "10px 12px",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <h5>Edit your Profile Information!</h5>
        </div>
      </div>
      <hr
        style={{
          margin: "0px",
          flexShrink: "0",
          borderWidth: "0px 0px thin",
          borderStyle: "solid",
          marginBottom: "10px",
          opacity: 1,
          borderColor: "rgb(227, 242, 253)",
        }}
      />
      <div>
        <TextField
          style={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          disabled
          id="outlined-disabled"
          label="Email (Fixed)"
          defaultValue={email}
        />
        <TextField
          style={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          id="outlined-disabled"
          label="Nickname"
          inputProps={{ maxLength: 16 }}
          value={inputNick}
          onChange={(e) => setInputNick(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          id="outlined-disabled"
          label="Please edit your personal tags (Separated by Commas)"
          value={inputTag}
          onChange={(event) => setInputTag(event.target.value)}
        />
      </div>
      <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
        <Button
          sx={{ borderRadius: "8px", marginRight: "0.5rem" }}
          variant="outlined"
          color="success"
          onClick={saveProfile}
        >
          Save Changes
        </Button>
        <Button
          sx={{ borderRadius: "8px" }}
          variant="outlined"
          color="error"
          onClick={() => {
            Router.push("/user/profile");
          }}
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
}
