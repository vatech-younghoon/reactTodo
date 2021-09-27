import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useQuery } from "@apollo/client";
import { SEARCH_TODO } from "queries/todo";
import { TodoHead, TodoList, TodoCreate } from "./index";

const useStyle = makeStyles(theme => ({
  box: {
    width: "512px",
    height: "768px",
    position: "relative",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.04)",
    margin: "0 auto",
    marginTop: "96px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column"
  }
}));

function TodoTemplate({ children }) {
  const classes = useStyle();
  const { loading, error, data, refetch: todoRefetch } = useQuery(SEARCH_TODO);
  return (
    <div className={classes.box}>
      <TodoHead />
      <TodoList
        data={data}
        error={error}
        loading={loading}
        todoRefetch={todoRefetch}
      />
      <TodoCreate todoRefetch={todoRefetch} />
    </div>
  );
}

export default TodoTemplate;
