import * as React from "react";
//Chakra-ui
import styled from "@emotion/styled";

export const Text = ({ children, ...props }: { children: React.ReactNode }) => {
  return <SpanStyled {...props}>{children}</SpanStyled>;
};

const SpanStyled = styled.span`
  font-size: 0.75rem;
`;

export default Text;