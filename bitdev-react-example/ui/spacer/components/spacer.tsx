import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export type SpacerProps = {
  // add props here
};

const StyledSpacer = styled.div<SpacerProps>`
  display: flex;
`;

export function Spacer(props: SpacerProps) {
  return (
    <ThemeProvider theme={{}}>
      <StyledSpacer {...props}>
      </StyledSpacer>
    </ThemeProvider>
  );
}