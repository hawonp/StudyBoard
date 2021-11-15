import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import SettingUpNickTag from "../../components/SettingUpNickTag";

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

export default function SettingUp() {
  return (
    <BoxWrapper>
      <SettingUpNickTag />
    </BoxWrapper>
  );
}
