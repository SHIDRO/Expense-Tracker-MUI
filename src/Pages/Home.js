import React from 'react'
import Form from "../components/Form/Form";
import Details from "../components/Details/Details";
import List from "../components/List/List"
import {Grid, Container, Typography} from "@mui/material";
import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";
import { useSelector } from 'react-redux';

const Home = () => {
    const {transactions} = useSelector(state => state.transactions);
    const total = transactions.reduce((total, tr) => tr.type === 'Income' ? total + tr.amount : total - tr.amount , 0)


  return (
    <>
        <Typography sx={{marginTop: '35px'}} variant="h3" align='center'>Total: {total}$</Typography>
        <Form />
        <Container maxWidth="md">
          <List />
        </Container>

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Details title={"Income"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Details title={"Expense"} />
            </Grid>
          </Grid>
        </Container>
        <PushToTalkButtonContainer>
          <PushToTalkButton/>
        </PushToTalkButtonContainer>
    </>
  )
}

export default Home