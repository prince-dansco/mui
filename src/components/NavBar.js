import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  Menu,
  styled,
  MenuItem,
} from "@mui/material";

// import MailIcon from '@mui/icons-material/Mail';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          princewill
        </Typography>

        <Search>
          <InputBase placeholder="search......" />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="erorr">
            badge
          </Badge>
          <Badge badgeContent={4} color="secondary">
            {/* <MailIcon color="action" /> */}
          </Badge>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src=""
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "30", height: "30" }}
            src=""
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">john</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>profile</MenuItem>
        <MenuItem>my account</MenuItem>
        <MenuItem>logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
