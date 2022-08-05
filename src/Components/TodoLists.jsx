import React, { useState } from "react";
import { Paper, List, Grid, Box, Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  console.log("ini todos", todos);

  const createTodo = (todo) => {
    const newTodos = [...todos, { todo, completed: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((item, index) => {
      if (index === id) {
        item.completed = !item.completed;
      }
    });
    setTodos(newTodos);
  };

  const updateTodo = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((item, index) => {
      if(index === id){
        item.todo = editValue
      }
    })
    setTodos(newTodos);
  }

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach(item => {
      item.completed = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }
  
  const deleteTodos = () => {
    const newTodos = todos.filter(item => {
      return item.completed === false
    })
    setTodos(newTodos)
  }
  return (
    <div>
      <Box>
        <TodoForm createTodo={createTodo} />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          marginBottom: 20,
        }}
      >
        <FormControlLabel
          control={<Checkbox style={{ color: "blue" }} onClick={handleCheckAll} checked={checkAll} />}
          label="All"
        />
        <Button variant="outlined" color="primary" onClick={deleteTodos} startIcon={<Delete />}>
          Delete All
        </Button>
      </Box>
      <Box>
        <Grid container direction="column" spacing={1}>
          {todos.map((item, index) => (
            <Grid item key={index}>
              <Paper>
                <List>
                  <Todo
                    id={index}
                    item={item}
                    createTodo={createTodo}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                    updateTodo={updateTodo}
                  />
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TodoLists;
