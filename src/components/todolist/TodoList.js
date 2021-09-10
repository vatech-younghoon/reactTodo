import React from "react";
import { makeStyles } from "@material-ui/styles";

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
  return <div className={classes.root}>aaa</div>;
}

export default TodoList;
