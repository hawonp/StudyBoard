import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { TextField, Modal, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  px: 4,
  pb: 3,
};

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
  console.log(profile);
  const router = useRouter();
  const { email, nick, tag } = profile;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleDelete = () => {
    setOpen(false);

    router.push("/");
  };

  const handleClose = () => setOpen(false);

  return (
    <BoxWrapper>
      <div style={{ display: "flex" }}>
        <div>
          <h5>Profile Page!</h5>
        </div>

        {/*edit button for profile*/}
        <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
          <IconButton sx={{ borderRadius: "4px" }} aria-label="edit">
            <Link href="/user/updateprofile">
              <EditIcon />
            </Link>
          </IconButton>
          <IconButton
            sx={{ borderRadius: "4px" }}
            aria-label="delete"
            onClick={handleOpen}
          >
            <DeleteIcon />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <h4 id="child-modal-title">Delete Account</h4>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Will you really delete your account? This action is not
                reversible.
              </Typography>
              <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
                <Button
                  sx={{
                    borderRadius: "8px",
                    height: "2rem",
                    marginTop: "0.5rem",
                  }}
                  variant="contained"
                  color="error"
                  type="submit"
                  onClick={handleDelete}
                >
                  Delete Account
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>

      <HrWrapper />

      <div>
        <TextField
          sx={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          disabled
          id="outlined-disabled"
          label="Email (Fixed)"
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
          label="Personal Tags"
          defaultValue={tag}
        />
      </div>
    </BoxWrapper>
  );
}
