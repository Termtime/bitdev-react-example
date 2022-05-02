import React from 'react';
import { render } from '@testing-library/react';
import { BasicSpacer } from '../spacer.composition';

it('should render', () => {
  const { getByTestId } = render(<BasicSpacer />);
  const rendered = getByTestId('BasicSpacer');
  expect(rendered).toBeTruthy();
});
