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
import Form from "./components/Form/Form";
import Details from "./components/Details/Details";
import List from "./components/List/List";
import { useSelector } from "react-redux";

//1) Start functioning
//2) dont forget to loop transactions. style (of Buttons) depends on the type (List)

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
        <Form />
        <Container maxWidth="md">
          <List />
        </Container>

        <Container maxWidth="lg">
          <Grid sx={{}} container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Details title={"Income"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Details title={"Expense"} />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default App;
