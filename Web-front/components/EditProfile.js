import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EditProfile({ profile }) {
  const { name, email, nick, tag } = profile;
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
          <h5>PK Hong&apos;s Information</h5>
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
          label="Name"
          defaultValue={name}
        />
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
          label="HashTag"
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
