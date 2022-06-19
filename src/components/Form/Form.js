import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Divider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  incomeCategories,
  expenseCategories,
} from "../../constants/categories";
import { useSelector } from "react-redux";
import formatDate from "../../utils/formatDate";
import { transactionsActions } from "../../store/store";
import { useDispatch } from "react-redux/es/exports";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  type: "Income",
  category: "",
  amount: "",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  // const {transactions} = useSelector((state) => state);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;


  return (
    <Container maxWidth="md" sx={{ marginTop: "50px" }}>
      <Box>
        <Typography align="center" variant="h4">
          This is an example.
        </Typography>
        <Typography
          sx={{ marginTop: "10px" }}
          gutterBottom
          align="center"
          variant="subtitle1"
        >
          Try saying something like: Add income for 50$ category businnes next
          monday.{" "}
        </Typography>
      </Box>
      <Divider />
      <Typography sx={{ marginTop: "15px" }} align="center" variant="subtitle1">
        what they sayin`
      </Typography>
      <Grid sx={{ padding: "20px 40px" }} container spacing={2}>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  type: e.target.value,
                }))
              }
            >
              <MenuItem value={"Income"}>Income</MenuItem>
              <MenuItem value={"Expense"}>Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel>Category</InputLabel>
            <Select value={formData.category} onChange={(e) => setFormData(prevState => ({...prevState, category: e.target.value}))}>
              {selectedCategories.map((c) => {
                return (
                  <MenuItem key={c.type} value={c.type}>
                    {c.type}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setFormData(prevState => ({...prevState, amount: +e.target.value}))}
            variant="standard"
            value={formData.amount}
            label="Amount"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField value={formData.date} onChange={(e) => setFormData(prevState => ({...formData, date: formatDate(e.target.value)}))} variant="standard" label="Date" type="date" fullWidth />
        </Grid>

        <Button
          onClick={() => {
            if(!formData.amount || !formData.category) return;

            const id = uuidv4()
            dispatch(transactionsActions.addTransaction({...formData, id: id}));
            setFormData(initialState);


          }}
          sx={{ margin: "20px auto 0", padding: "7px 20px" }}
          variant="outlined"
          endIcon={<AddIcon />}
        >
          Create
        </Button>
      </Grid>
    </Container>
  );
};

export default Form;
