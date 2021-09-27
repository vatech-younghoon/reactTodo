import React from "react";
import { createGlobalStyle } from "styled-components";
import { TodoTemplate } from "./components/todolist";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate />
    </TodoProvider>
  );
}

export default App;
