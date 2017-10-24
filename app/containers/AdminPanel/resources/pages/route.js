import React from 'react';
import { Route } from 'react-router-dom';
import { PagesCreate } from './';
export default [
  <Route exact path="/pages/create/*" component={(routeProps) => <PagesCreate resource={'pages'} {...routeProps} />} />,
];
