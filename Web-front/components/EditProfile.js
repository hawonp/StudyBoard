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

//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const users = "/users/";

export default function EditProfile({ profile }) {
  const { email, nick, tag } = profile;

  const [inputNick, setInputNick] = useState(nick);
  const [inputTag, setInputTag] = useState(tag);
  const { user, error, isLoading } = useUser();

  const saveProfile = async () => {
    // TODO: API CALL BACKEND NEED
    // 보낼 데이터는 name, email, inputNick, inputTag
    // const result = await fetch('URL', {method: "POST", body: {name: name, email: email, nick: inputNick, tag: inputTag}})
    // // { data: "failed" }
    // if ((await result.json()).data === "failed") { alert("업로드 실패") }
    // else { router.replace("/user/profile") }
    axiosInstance
      .put(users + user.sub, {
        params: {
          user_nickname: inputNick,
          user_tags: inputTag,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        if (responseData == 1) {
          // window.location.href = "./profile";
          // TODO proper reloading
          // window.location.reload();
          // Router.push("/user/profile");
          // <Link href="/user/profile">
          //   <EditIcon />
          // </Link>;
        }
      })
      .catch((e) => {
        const resp = e.response;
        // if (resp["status"] == 500) {
        //   // TODO temp redirection
        // }
        alert("You have not changed your profile information!");
        console.log(resp);
      });
  };

  if (isLoading) return <div>Loading...</div>;
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
          label="Email"
          defaultValue={email}
        />
        <TextField
          style={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          id="outlined-disabled"
          label="NickName"
          value={inputNick}
          onChange={(e) => setInputNick(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          id="outlined-disabled"
          label="Please edit your personal tags"
          value={inputTag}
          onChange={(e) => setInputTag(e.target.value.split(","))}
        />
      </div>
      <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
        <Button
          sx={{ borderRadius: "8px" }}
          variant="contained"
          color="success"
          onClick={saveProfile}
        >
          Save
        </Button>
      </div>
    </Box>
  );
}
