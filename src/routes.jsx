// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Layout from './layout';
import Main from './views/main';

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Layout>
)

export default Routes;