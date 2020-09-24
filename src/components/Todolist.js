import React from "react";
import styled from "styled-components";
import Create from "./Create";
import { useTodoState } from "../Context";

import Item from "./Item";

const TodoListBlock = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: white;
  overflow: auto;
  border-right: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
`;

const TodoHeadBlcok = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

function Todolist() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      <TodoHeadBlcok>할 일</TodoHeadBlcok>
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
      <Create />
    </TodoListBlock>
  );
}

export default Todolist;
