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

function TodoList() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </div>
  );
}

export default TodoList;
