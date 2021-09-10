import React from "react";
import { makeStyles } from "@material-ui/styles";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../TodoContext";

const useStyle = makeStyles(theme => ({
  root: {
    flex: 1,
    padding: "20px 32px",
    paddingBottom: "48px",
    overflowY: "auto"
  }
}));

function TodoList() {
  const classes = useStyle();
  const todos = useTodoState();
  console.log(todos);
  return (
    <div className={classes.root}>
      {todos.map(todo => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
}

export default TodoList;
