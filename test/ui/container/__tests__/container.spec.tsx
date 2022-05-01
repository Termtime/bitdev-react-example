import React from 'react';
import { render } from '@testing-library/react';
import { BasicContainer } from '../container.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicContainer />);
  const rendered = getByTestId('BasicContainer');
  expect(rendered).toBeTruthy();
});
