import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  width: 100%;
  padding-top: 12px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
`;

function Head() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <HeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
    </HeadBlock>
  );
}
export default Head;
