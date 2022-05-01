import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import CategoryTile from '..';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('CategoryTile Component', () => {
  it('renders correctly', () => {
    const CategoryTileFragment = render(
      <BrowserRouter>
        <CategoryTile
          categoryImg=""
          title={<>test</>}
          redirectionRoute="/test"
        />
      </BrowserRouter>,
    ).asFragment();
    expect(CategoryTileFragment).toMatchSnapshot();
  });

  it('redirects user on button click', async () => {
    render(
      <BrowserRouter>
        <CategoryTile
          categoryImg=""
          title={<>test</>}
          redirectionRoute="/test"
        />
      </BrowserRouter>,
    ).asFragment();
    await fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith('/test'));
  });
});
