import React from "react";
import styled from "styled-components";

const CompleteitemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CompleteText = styled.div`
  flex: 1;
  font-size: 20px;
  color: #495057;
`;
function Completeitem({ id, complete, text }) {
  return (
    <CompleteitemBlock>
      {complete && <CompleteText>{text}</CompleteText>}
    </CompleteitemBlock>
  );
}

export default Completeitem;
