import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../button';

test('renders a button', () => {
  const { container, getByText } = render(<Button>This is a button.</Button>);

  // checks whether the button is rendered with given children.
  expect(getByText('This is a button.')).toBeInTheDocument();
});
