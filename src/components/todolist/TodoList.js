import React from "react";
import { makeStyles } from "@material-ui/styles";
import TodoItem from "./TodoItem";

const useStyle = makeStyles(theme => ({
  root: {
    flex: 1,
    padding: "20px 32px",
    paddingBottom: "48px",
    overflowY: "auto"
  }
}));

function TodoList(props) {
  const classes = useStyle();
  const { loading, error, data, todoRefetch } = props;
  if (loading) return "Loading...";
  if (error) {
    console.log(error);
    return `Error! ${error.message}`;
  }
  return (
    <div className={classes.root}>
      {data.searchTodo.map(todo => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          text={todo.text}
          done={todo.done}
          todoRefetch={todoRefetch}
        />
      ))}
    </div>
  );
}

export default TodoList;
