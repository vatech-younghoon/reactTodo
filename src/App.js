import React from "react";
import { makeStyles } from "@material-ui/styles";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/todolist/TodoTemplate";

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
      <TodoTemplate>ㅎㅇ </TodoTemplate>
    </>
  );
}

export default App;
