import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from '..';

test('renders page not found screen', () => {
  render(<PageNotFound />);
  const linkElement = screen.getByText(/Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});
