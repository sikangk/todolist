import React from "react";
import styled from "styled-components";
import Todolist from "./Todolist";
import Completelist from "./Completelist";

const ListBlock = styled.div`
  display: flex;
  flex: 1;
  height: 400px;
  background: white;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

function List() {
  return (
    <ListBlock>
      <Todolist />
      <Completelist />
    </ListBlock>
  );
}

export default List;
