import React from "react";
import styled from "styled-components";

const TemplateBlock = styled.div`
  max-width: 768px;
  height: 678px;

  position: relative;
  background: white;
  opacity: 0.5;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);

  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;
