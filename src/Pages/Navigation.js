import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Tabs,
    Tab,
    Grid,
    Container,
  } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

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
    const [value, setValue] = useState(0);

    const tabsChangeHandler = (e, newValue) => {
      setValue(newValue);
    };

  return (
    <AppBar position="relative">
        <Toolbar sx={{ backgroundColor: "#fff", padding: "10px" }}>
          <PaidIcon sx={{ marginRight: "10px", color: "black" }} />
          <Typography variant="h5" color={"black"}>
            Expense Tracker
          </Typography>
          <Box
            sx={{
              marginLeft: "40px",
              borderBottom: "1px",
              borderColor: "divider",
            }}
          >
            <Tabs
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
                  onClick={() => {
                    if(tab.name === 'Home'){
                      return navigate(`/`)
                    }
                    navigate(`/${tab.name}`)
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Navigation