import React from 'react';
import { render } from '@testing-library/react';
import { BasicGrid } from '../grid.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicGrid />);
  const rendered = getByTestId('BasicGrid');
  expect(rendered).toBeTruthy();
});
