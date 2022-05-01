import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '..';

describe('Home Screen', () => {
  it('renders home screen', () => {
    const HomeFragment = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    ).asFragment();
    expect(HomeFragment).toMatchSnapshot();
  });
});
