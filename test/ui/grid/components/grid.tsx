import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export type GridProps = {
  // add props here
};

const StyledGrid = styled.div<GridProps>`
  display: flex;
`;

export function Grid({}: GridProps) {
  return (
    <ThemeProvider theme={{}}>
      <StyledGrid></StyledGrid>
    </ThemeProvider>
  );
}
