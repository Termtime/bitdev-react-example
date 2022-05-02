import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export type ContainerProps = {
  // add props here
};

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
`;

export function Container(props: ContainerProps) {
  return (
    <ThemeProvider theme={{}}>
      <StyledContainer {...props}>
      </StyledContainer>
    </ThemeProvider>
  );
}