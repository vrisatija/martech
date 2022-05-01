import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header Component', () => {
  it('renders header component', () => {
    const HeaderFragment = render(<Header />).asFragment();
    expect(HeaderFragment).toMatchSnapshot();
  });
});
