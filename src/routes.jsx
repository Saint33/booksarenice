// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Layout from './layout';
import Main from './views/main';
import BookPage from './views/bookPage';
import Vis from './views/library';

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/book/:id" component={BookPage} />
      <Route path="/library" component={Vis} />
    </Switch>
  </Layout>
)

export default Routes;