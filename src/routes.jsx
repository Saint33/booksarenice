import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Layout from './layout';
import Main from './views/main';

const Routes = () => (
  <Layout>
    <Route path="/" component={Main} />
  </Layout>
)

export default Routes;