import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Search from '../Search';
import Compare from '../Compare';
import PageNotFound from '../PageNotFound';
import { ROUTES } from '../../constants/routes';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
      <Route path={ROUTES.COMPARE} element={<Compare />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
