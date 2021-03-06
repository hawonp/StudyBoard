// react imports
import * as React from "react";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

// MUI imports
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import LoadingProgress from "../utils/Loading";

// package imports
import axiosInstance from "../../utils/routeUtil";

// constant for Axios endpoint
const USERSENDPOINT = "/users/";

// functional component for rendering the edit profile form
export default function ProfileEdit({ profile }) {
  const router = useRouter(); // used for redirection
  const { email, nick, tag } = profile; // data fed into from profile
  const [inputNick, setInputNick] = useState(nick); // nickname state
  const [inputTag, setInputTag] = useState(tag.flat().toString()); // personal tags state (flattened into a list)
  const { user, error, isLoading } = useUser(); // user session data from Auth0

  // user clicks on the save profile button after editing their profile
  const saveProfile = async () => {
    const formattedTags = inputTag
      .split(",")
      .map((unadjustedTag) =>
        unadjustedTag.trim().replace(/\s+/g, "-").toLowerCase()
      );
    axiosInstance
      .put(USERSENDPOINT + user.sub, {
        params: {
          user_nickname: inputNick,
          user_tags: formattedTags,
        },
      })
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        if (responseData == 1) {
          router.push("/user/profile");
        }
      })
      .catch((e) => {
        const resp = e.response;
        if (resp != undefined && resp["status"] == 400) {
          router.push("/" + "error/400");
        }
      });
  };

  // user session is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // user session and profile data loaded in
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
            router.push("/user/profile");
          }}
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
} // functional component closure
