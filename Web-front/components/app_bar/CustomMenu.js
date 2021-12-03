// react imports
import React from "react";

// MUI imports
import { Menu, IconButton, MenuItem, Link } from "@mui/material";

// functional component for rendering the menu bar inside the custom app bar
export default function CustomMenu({ icon, itemList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {icon}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {itemList.map((item, index) =>
          item.type === "normal" ? (
            <MenuItem
              key={`${item.title}-${index}`}
              onClick={() => {
                item.onClick();
                handleClose();
              }}
            >
              {item.title}
            </MenuItem>
          ) : (
            item.component
          )
        )}
      </Menu>
    </>
  );
} //functional component closure
