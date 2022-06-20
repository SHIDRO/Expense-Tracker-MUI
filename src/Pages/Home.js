import React from 'react'
import Form from "../components/Form/Form";
import Details from "../components/Details/Details";
import List from "../components/List/List"
import {Grid, Container} from "@mui/material";
import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";

const Home = () => {
  return (
    <>
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
        <PushToTalkButtonContainer>
          <PushToTalkButton/>
        </PushToTalkButtonContainer>
    </>
  )
}

export default Home