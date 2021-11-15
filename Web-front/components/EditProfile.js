import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

import Cookies from "universal-cookie";
//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const users = "/users/";

export default function EditProfile({ profile }) {
  const { email, nick, tag } = profile;
  const router = useRouter();

  const [inputNick, setInputNick] = useState(nick);
  const [inputTag, setInputTag] = useState(tag);

  const saveProfile = async () => {
    // TODO: API CALL BACKEND NEED
    // 보낼 데이터는 name, email, inputNick, inputTag
    // const result = await fetch('URL', {method: "POST", body: {name: name, email: email, nick: inputNick, tag: inputTag}})
    // // { data: "failed" }
    // if ((await result.json()).data === "failed") { alert("업로드 실패") }
    // else { router.replace("/user/profile") }
    axiosInstance
      .get(users + user_id, {
        params: {
          id_token: id_token,
        },
      })
      .then((response) => {
        if (response["status"] == 200) {
          const temp = response["data"];
          const temp_json = JSON.parse(temp);
          const user_info = temp_json.user;

          console.log(temp_json);
          setProfile({
            email: user_info.user_email_address,
            nick: user_info.user_nickname,
            tag: temp_json.tags,
          });
          setIsLoading(false);
        } else if (response["status"] == 403) {
          alert("Could not verify token at Backend");
        }
      });
  };

  return (
    <Box
      sx={{
        border: "0.1rem solid lightgray",
        borderRadius: "8px",
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
          onChange={(e) => setInputTag(e.target.value)}
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
