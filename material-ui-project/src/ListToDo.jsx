import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const ListToDo = ({text}) => {
    const [line, setLine] = useState(false);

    const removeItem = () => {
        return setLine(true);
    }
  return (
    <>
      <Paper elevation={1} sx={{ px: 2, mt: 2 }}>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary={text}
              style={{ textDecoration: line ? "line-through" : "none" }}
            />
            <IconButton edge="end" aria-label="delete" onClick={removeItem}>
              <DeleteIcon color="error" />
            </IconButton>
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default ListToDo;
