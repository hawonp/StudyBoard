import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

const BoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        border: "0.1rem solid lightgray",
        borderRadius: "8px",
        marginBottom: "16px",
        marginTop: "20px",
        padding: "10px 12px",
        backgroundColor: "white",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const HrWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        margin: "0px",
        flexShrink: "0",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        marginBottom: "10px",
        opacity: 1,
        borderColor: "rgb(227, 242, 253)",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default function ProfileInfo({ profile }) {
  const { email, nick, tag } = profile;

  return (
    <BoxWrapper>
      <div style={{ display: "flex" }}>
        <div>
          <h5>Profile Page!</h5>
        </div>

        {/*edit button for profile*/}
        <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
          <IconButton aria-label="edit">
            <Link href="/user/updateprofile">
              <EditIcon />
            </Link>
          </IconButton>
        </div>
      </div>

      <HrWrapper />

      <div>
        <TextField
          sx={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          disabled
          id="outlined-disabled"
          defaultValue={email}
        />
        <TextField
          sx={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          disabled
          id="outlined-disabled"
          label="NickName"
          defaultValue={nick}
        />
        <TextField
          sx={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          disabled
          id="outlined-disabled"
          label="A list of hashtags!"
          defaultValue={tag}
        />
      </div>
    </BoxWrapper>
  );
}
