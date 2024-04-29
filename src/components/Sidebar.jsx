import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Collapse,
  Typography,
} from "@mui/material";
import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  Home,
  AccountCircle,
  Lock,
  Logout,
} from "@mui/icons-material";

const Sidebar = ({ open, handleDrawerToggle }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => setCollapsed(!collapsed);

  const navigationItems = [
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Profile", icon: <AccountCircle />, path: "/profile" },
    { name: "Change Password", icon: <Lock />, path: "/change-password" },
    { name: "Logout", icon: <Logout />, onClick: () => handleLogout() },
  ];

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear tokens, redirect)
    console.log("Logout clicked");
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        docked={false}
      >
        <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              {open ? <ChevronRightOutlined /> : <ChevronLeftOutlined />}
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Search O Pal
            </Typography>
          </Toolbar>
        </AppBar>
        <Divider />
        <List>
          {navigationItems.map((item) => (
            <ListItem
              button
              key={item.name}
              component="a"
              href={item.path}
              onClick={item.onClick}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Collapse in={collapsed} collapsedHeight={40}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          onClick={handleCollapse}
          sx={{ cursor: "pointer", padding: "10px" }}
        >
          Navigation {collapsed ? ">" : "<"}
        </Typography>
      </Collapse>
    </>
  );
};

export default Sidebar;
