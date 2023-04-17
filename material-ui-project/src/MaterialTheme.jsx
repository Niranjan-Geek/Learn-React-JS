import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import ListToDo from "./ListToDo";


const MaterialTheme = () => {
  const [itemValue, setItemValue] = useState("");
  const [item, setItemText] = useState([]);

  const itemChange = (event) => {
    setItemValue(event.target.value);
  };

  const onChange = () => {
    if(itemValue === "") {
      alert("Please Enter a Value");
    }else{
      setItemText((prevValue) => {
        return [...prevValue, itemValue];
      });
      setItemValue('');
    }
  };

  return (
    <>
      <div className="theme-box">
        <Paper elevation={2} sx={{ p: 5 }}>
          <h1>Material UI ToDo List</h1>
          <div className="form-box">
            <TextField
              id="outlined-basic"
              label="Enter Value"
              variant="outlined"
              onChange={itemChange}
              value={itemValue}
            />
            <Button variant="contained" color="primary" sx={{ height: "56px" }} onClick={onChange} >
              <AddIcon />
            </Button>
          </div>
          <div className="list-box">
            {item.map((val, index) => {
                return (
                    <ListToDo key={index} text={val} />
                )
            })}
          </div>
        </Paper>
      </div>
    </>
  );
};

export default MaterialTheme;
