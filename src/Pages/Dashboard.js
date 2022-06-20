import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Details from "../components/Details/Details";
import { useSelector } from 'react-redux';


const Dashboard = () => {
    const {transactions} = useSelector(state => state.transactions);
    const total = transactions.reduce((total, tr) => tr.type === 'Income' ? total + tr.amount : total - tr.amount , 0)


  return (
    <Container maxWidth="md">
    <Typography sx={{margin: "20px"}} align="center" variant="h4">Dashboard:</Typography>
    <Typography align="center" variant="h5">Total: {total}$</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Details title={"Income"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
