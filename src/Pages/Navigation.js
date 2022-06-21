import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Drawer,
  IconButton
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import MenuIcon from '@mui/icons-material/Menu';

const tabs = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Dashboard",
  },
  {
    id: 3,
    name: "Profile",
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const tabsChangeHandler = (e, newValue) => {
    setValue(newValue);
  };

  const toggleMenu = (e) => {
    console.log(e)
    if(e.type === 'keydown' && (e.key === "Shift" || e.key === "Tab")){
      return;
    }
    setOpen(prevState => !prevState)
  }

  return (
    <AppBar sx={{ backgroundColor: "#fff" }} position="static">
      <Toolbar sx={{ backgroundColor: "#fff", padding: "10px" }}>
        <PaidIcon sx={{ marginRight: "10px", color: "black" }} />
        <Typography variant="h5" color={"black"}>
          Expense Tracker
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: "40px",
            borderBottom: "1px",
            borderColor: "divider",
          }}
        >
          <Drawer onClose={toggleMenu} anchor="right" open={open}>
            <Tabs
              sx={{ backgroundColor: "#fff", margin: '20px' }}
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={tabsChangeHandler}
              aria-label="basic tabs example"
            >
              {tabs.map((tab) => (
                <Tab
                  wrapped={true}
                  key={tab.id}
                  id={tab.id}
                  label={tab.name}
                  onClick={(e) => {
                    toggleMenu(e);
                    if (tab.name === "Home") {
                      return navigate(`/`);
                    }
                    navigate(`/${tab.name}`);
                  }}
                />
              ))}
            </Tabs>
          </Drawer>
        </Box>
        <IconButton onClick={toggleMenu} sx={{marginRight: '20px'}}>
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;