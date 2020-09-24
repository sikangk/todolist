import React from "react";
import styled from "styled-components";
import Completeitem from "./Completeitem";
import { useTodoState } from "../Context";

const CompleteListBlock = styled.div`
  width: 50%;
  height: 100%;
  background: white;
  overflow: auto;
  border-bottom-right-radius: 16px;
`;

const CompleteListHeadBlock = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

function Completelist() {
  const todos = useTodoState();
  return (
    <CompleteListBlock>
      <CompleteListHeadBlock>완료된 일</CompleteListHeadBlock>
      {todos.map((todo) => (
        <Completeitem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </CompleteListBlock>
  );
}

export default Completelist;
