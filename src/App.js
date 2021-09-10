import React from "react";
import { makeStyles } from "@material-ui/styles";
import { createGlobalStyle } from "styled-components";
import { TodoTemplate, TodoHead, TodoList } from "./components/todolist";

const useStyle = makeStyles(theme => ({}));

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  const classes = useStyle();
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
