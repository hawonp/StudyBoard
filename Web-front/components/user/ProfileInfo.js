// react imports
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

// MUI imports
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { TextField, Modal, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// package imports
import { useUser } from "@auth0/nextjs-auth0";
import axiosInstance from "../../utils/routeUtil";

// constants
const DELETEENDPOINT = "/users/";

// modal styling that appears when deleting the user profile
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

// BoxWrapper styling
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

// HRWrapper styling
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

// functional component for displaying the profile info in the profile page
export default function ProfileInfo({ profile }) {
  const router = useRouter(); // used for redirection
  const { email, nick, tag } = profile; // profile info fed in from profile page
  const { user, error, isLoading } = useUser(); // user session data from Auth0

  // states for handling modal opening and closing
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // action handling for deleting a user profile
  const handleDelete = () => {
    setOpen(false);
    if (!isLoading && !error) {
      axiosInstance.delete(DELETEENDPOINT + user.sub).then((response) => {
        if (response["data"] == 1) {
          router.push("/" + "api/auth/logout");
        }
      });
    }
  };

  return (
    <BoxWrapper>
      <div style={{ display: "flex" }}>
        <div>
          <h5>Profile Page!</h5>
        </div>

        <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
          {/* edit button to redirect to edit page */}
          <IconButton sx={{ borderRadius: "4px" }} aria-label="edit">
            <Link href="/user/updateprofile">
              <EditIcon />
            </Link>
          </IconButton>

          {/* delete button to delete user profile */}
          <IconButton
            sx={{ borderRadius: "4px" }}
            aria-label="delete"
            onClick={handleOpen}
          >
            <DeleteIcon />
          </IconButton>

          {/* modal that appears to confirm user profile deletion */}
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
                    marginRight: "0.5rem",
                  }}
                  variant="outlined"
                  color="error"
                  type="submit"
                  onClick={handleDelete}
                >
                  Delete Account
                </Button>
                <Button
                  sx={{
                    borderRadius: "8px",
                    height: "2rem",
                    marginTop: "0.5rem",
                  }}
                  variant="outlined"
                  color="success"
                  type="submit"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>

      <HrWrapper />

      <div>
        {/* user email */}
        <TextField
          sx={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          disabled
          id="outlined-disabled"
          label="Email (Fixed)"
          defaultValue={email}
        />
        {/* user nickname */}
        <TextField
          sx={{ marginBottom: "10px", marginTop: "8px" }}
          fullWidth
          disabled
          id="outlined-disabled"
          label="NickName"
          defaultValue={nick}
        />
        {/* user tags */}
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
} // functional component closure
