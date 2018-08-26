import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

import App from '../../App';
import Recipe from '../Recipe/Recipe';

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <AppBar position="static">
        <h1>Recipe Search</h1>
      </AppBar>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
