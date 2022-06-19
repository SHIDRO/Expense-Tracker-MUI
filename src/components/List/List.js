import React from "react";

import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material/";
import { useSelector, useDispatch } from "react-redux";
import { transactionsActions } from "../../store/store";

const List = () => {
  const { transactions } = useSelector((state) => state).transactions;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
      dispatch(transactionsActions.deleteTransaction(id))
  }

  return (
    <MUIList sx={{ maxHeight: "150px", overflow: "auto" }} dense={false}>
      {transactions.map((tr) => {
        return (
          <Slide key={tr.id} direction="down" in mountOnEnter unmountOnExit>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={tr.type === "Income" ? {
    color: '#fff',
    backgroundColor: "green",
  }  : {
    color: '#fff',
    backgroundColor: "red",
  }}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={tr.category}
                secondary={`${tr.amount}$ - ${tr.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleDelete.bind(null, tr.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        );
      })}
    </MUIList>
  );
};

export default List;
