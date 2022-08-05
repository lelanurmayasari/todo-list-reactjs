import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const TodoForm = ({ createTodo }) => {
  const [value, setValue] = useState("");
  
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
    console.log("ini value", value);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ width: 300, marginRight: 10 }}
          id="outlined-basic"
          label="Add To-Do"
          variant="outlined"
          size="small"
          value={value}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
