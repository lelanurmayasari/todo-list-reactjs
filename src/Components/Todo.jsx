import React, { useState } from "react";
import {
  Checkbox,
  Typography,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Edit, Delete, Save } from "@material-ui/icons";

const Todo = ({ id, item, completeTodo, deleteTodo, updateTodo }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(item.todo);

  const handleOnEdit = () => {
    setOnEdit(true)
  }

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      updateTodo(editValue, id);
      item.completed = false;
    } else {
      setEditValue(item.todo);
    }
  };

  if(onEdit) {
    return (
    <div>
      <ListItem>
        <div
          id="form-update"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <input
            type="text"
            name="editValue"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </div>
        <ListItemSecondaryAction>
          <div id="save-button">
            <IconButton aria-label="save" onClick={() => handleSave(id)}>
              <Save />
            </IconButton>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
  } else {
    return (
    <div>
      <ListItem>
        <div id="list-item">
          <Checkbox
            style={{ color: "blue" }}
            checked={item.completed}
            onChange={() => completeTodo(id)}
          />
          <Typography variant="subtitle1" gutterBottom component="list-item">
            <span
              style={{ textDecoration: item.completed ? "line-through" : "" }}
            >
              {item.todo}
            </span>
          </Typography>
        </div>
        <ListItemSecondaryAction>
          <div id="list-button">
            <IconButton aria-label="edit" onClick={handleOnEdit}>
              <Edit />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => deleteTodo(id)}>
              <Delete />
            </IconButton>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
  }
};

export default Todo;
