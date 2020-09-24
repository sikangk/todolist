import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Head from "./components/Head";
import List from "./components/List";
import { TodoProvider } from "./Context";

const GlobalStyle = createGlobalStyle`
body{
  background:#edf2ff;
}
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <Head />
        <List />
      </Template>
    </TodoProvider>
  );
}

export default App;
