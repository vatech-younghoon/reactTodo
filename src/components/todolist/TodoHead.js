import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTodoState } from "../../TodoContext";

const useStyle = makeStyles(theme => ({
  root: {
    paddingTop: "48px",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingBottom: "24px",
    borderBottom: "1px solid #e9ecef"
  },
  h1: {
    margin: 0,
    fontSize: 36,
    color: "#343a40"
  },
  day: {
    marginTop: "4px",
    color: "#868e96",
    fontSize: "21px"
  },
  tasks__left: {
    color: "#20c997",
    fontSize: "18px",
    marginTop: "40px",
    fontWeight: "bold"
  }
}));

function TodoHead() {
  const todos = useTodoState();
  const unDoneTasks = todos.filter(todo => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <h1> {dateString}</h1>
      <div className={classes.day}>{dayName}</div>
      <div className={classes.tasks__left}>
        할 일 {unDoneTasks.length}개 남음
      </div>
    </div>
  );
}

export default TodoHead;
