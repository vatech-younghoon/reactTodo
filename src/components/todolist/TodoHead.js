import React from "react";
import { makeStyles } from "@material-ui/styles";

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
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <h1> 2021년 9월 10일</h1>
      <div className={classes.day}>수요일</div>
      <div className={classes.tasks__left}>할 일 2개 남음</div>
    </div>
  );
}

export default TodoHead;
