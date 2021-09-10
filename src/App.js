import React from "react";
import { createGlobalStyle } from "styled-components";
import {
  TodoTemplate,
  TodoHead,
  TodoList,
  TodoItem
} from "./components/todolist";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList>
          <TodoItem />
        </TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
