import React from "react";
import { makeStyles } from "@material-ui/styles";
import TodoItem from "./TodoItem";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";

const SEARCH_TODOS = gql`
  query searchTodo {
    todos: searchTodo {
      id
      text
      done
    }
  }
`;

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
  const { loading, error, data } = useQuery(SEARCH_TODOS);
  if (loading) return "Loading...";
  if (error) {
    console.log(error);
    return `Error! ${error.message}`;
  }
  return (
    <div className={classes.root}>
      {data.todos.map(todo => (
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
