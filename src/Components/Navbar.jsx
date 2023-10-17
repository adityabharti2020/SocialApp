import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, InputBase ,useTheme,useMediaQuery, Menu, MenuItem} from "@mui/material";
import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
const Navbar = () => {
  const theme = useTheme();
  const [open , setOpen] = useState(false);
  // console.log(theme)
  // console.log([theme.breakpoints.up("sm")])
  let isSmallMin = useMediaQuery(theme.breakpoints.up("sm"));
  // const isMediumMin = theme.breakpoints.up("md");
  // const isSmallMax = theme.breakpoints.down("sm");
  // console.log(`${isSmallMin} && ${isSmallMax}`)
  const StyleToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%",
  }));
  const Icons = styled("Box")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    isSmallMin:{
      display:"none",
    },
  }));
  const UserBox = styled("Box")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    isSmallMin:{
      display:"flex",
    },
  }));
  return (
    <AppBar position="sticky">
      <StyleToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SocialApp
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={10} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
          onClick={(e) => setOpen(true)}
            src="https://source.unsplash.com/60x60?face"
            sx={{ width: 30, height: 30, borderRadius: "50%" }}
          
          />
        </Icons>
        
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            src="https://source.unsplash.com/60x60?face"
            sx={{ width: 30, height: 30, borderRadius: "50%" }}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyleToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
