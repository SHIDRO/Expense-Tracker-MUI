import React, { useState } from "react";
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

import { useSelector } from "react-redux";


import {Routes} from 'react-router-dom';

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

const App = () => {
  const {transactions} = useSelector(state => state).transactions;
  const [value, setValue] = useState(0);

  const tabsChangeHandler = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
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
                  key={tab.id}
                  id={tab.id}
                  label={tab.name}
                  onClick={() => {
                    console.log(`navigate to => localhost:3000/${tab.name}`);
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        
      </main>
    </div>
  );
};

export default App;
